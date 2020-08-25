from twilio.rest import Client


class Sms:

    def __init__(self):
        self.account_sid = 'ACecb332e3e8a2498a6ce55682486e8569'
        self.auth_token = 'e55341357c38c36fbbc8c5dc922684c9'
        self.number = '+12055576145'

    def send_sms(self, message, destination="972536096301"):
        client = Client(self.account_sid, self.auth_token)

        message = client.messages \
            .create(
                 body=message,
                 from_=self.number,
                 to='+'+destination
             )

        # print(message.sid)
