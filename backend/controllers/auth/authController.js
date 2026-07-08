const User = require("../../models/auth/User");
const jwt = require("jsonwebtoken");

// ─── Generate JWT Token ─────────────────────────────────────────────────────
const generateToken = (userId, rememberMe = false) => {
  // rememberMe = 30 days, normal = 7 days
  const expiresIn = rememberMe ? "30d" : (process.env.JWT_EXPIRES_IN || "7d");
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn });
};

// ─── @desc    Register a new user ───────────────────────────────────────────
// ─── @route   POST /api/auth/register ───────────────────────────────────────
// ─── @access  Public ────────────────────────────────────────────────────────
exports.register = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;

    // 1. Validate required fields
    if (!firstName || !lastName || !username || !email || !password) {
      return res.status(400).json({
        success: false,
        error: "All fields are required: first name, last name, username, email, and password.",
      });
    }

    // 2. Password strength validation (server-side)
    if (password.length < 8) {
      return res.status(400).json({ success: false, error: "Password must be at least 8 characters." });
    }
    if (!/[A-Z]/.test(password)) {
      return res.status(400).json({ success: false, error: "Password must include at least one uppercase letter." });
    }
    if (!/[0-9]/.test(password)) {
      return res.status(400).json({ success: false, error: "Password must include at least one number." });
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return res.status(400).json({ success: false, error: "Password must include at least one special character (!@#$...)." });
    }

    // 3. Check if email already exists
    const emailExists = await User.findOne({ email: email.toLowerCase() });
    if (emailExists) {
      return res.status(409).json({ success: false, error: "An account with this email already exists." });
    }

    // 4. Check if username already exists
    const usernameExists = await User.findOne({ username: username.toLowerCase() });
    if (usernameExists) {
      return res.status(409).json({ success: false, error: "This username is already taken. Please choose another." });
    }

    // 5. Create user — password auto-hashed by pre-save hook
    const user = await User.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      username: username.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      passwordHash: password,
    });

    // 6. Generate JWT (new accounts default to 7d token)
    const token = generateToken(user._id, false);

    res.status(201).json({
      success: true,
      message: "Account created successfully!",
      token,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res.status(409).json({ success: false, error: `An account with this ${field} already exists.` });
    }
    res.status(500).json({ success: false, error: "Server error. Please try again." });
  }
};

// ─── @desc    Login existing user ───────────────────────────────────────────
// ─── @route   POST /api/auth/login ──────────────────────────────────────────
// ─── @access  Public ────────────────────────────────────────────────────────
exports.login = async (req, res) => {
  try {
    const { email, password, rememberMe } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: "Please provide both email and password." });
    }

    // Find user, explicitly select passwordHash since it's hidden by default
    const user = await User.findOne({ email: email.toLowerCase() }).select("+passwordHash");
    if (!user) {
      return res.status(401).json({ success: false, error: "Invalid email or password." });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: "Invalid email or password." });
    }

    // rememberMe = 30 days, normal session = 7 days
    const token = generateToken(user._id, !!rememberMe);

    res.status(200).json({
      success: true,
      message: "Logged in successfully!",
      token,
      rememberMe: !!rememberMe,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error. Please try again." });
  }
};

// ─── @desc    Get current logged-in user ────────────────────────────────────
// ─── @route   GET /api/auth/me ──────────────────────────────────────────────
// ─── @access  Private (requires JWT) ────────────────────────────────────────
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ success: false, error: "User not found." });
    }
    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        fullName: user.fullName,
        username: user.username,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server error." });
  }
};
