from datetime import datetime
from bson import ObjectId

class Message:
    def __init__(self, user_msg, bot_msg, user_id):
        self._id = ObjectId()
        self.user_id = user_id
        self.user_msg = user_msg
        self.bot_msg = bot_msg
        self.timestamp = datetime.now()
        self.weights = 1
    def to_dict(self):
        return {
            "_id": str(self._id),
            "user_id": self.user_id,
            "user_msg": self.user_msg,
            "bot_msg": self.bot_msg,
            "timestamp" : self.timestamp,
            "weights" : self.weights
        }