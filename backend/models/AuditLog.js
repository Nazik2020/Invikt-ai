const mongoose = require("mongoose");

const auditLogSchema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: true,
      enum: [
        "USER_SUSPEND",
        "USER_ACTIVATE",
        "USER_DELETE",
        "USER_LOGIN_FAIL",
        "PASSWORD_CHANGE",
        "ACCOUNT_DEACTIVATE",
        "ACCOUNT_DELETE",
        "ADMIN_LOGIN",
      ],
    },
    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    targetUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    details: {
      type: String,
      default: "",
    },
    ip: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

auditLogSchema.index({ createdAt: 1 }, { expireAfterSeconds: 7776000 });

module.exports =
  mongoose.models.AuditLog ||
  mongoose.model("AuditLog", auditLogSchema);
