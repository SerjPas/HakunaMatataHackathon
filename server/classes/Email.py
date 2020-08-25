import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText


class Email:

    def __init__(self):
        self.sender_address = 'hackatonhakunamatata@gmail.com'
        self.sender_pass = 'pTjiIAFGGK'

    def send_mail(self, subject, content, target):

        mail_content = content

        sender_address = self.sender_address
        sender_pass = self.sender_pass
        receiver_address = target

        message = MIMEMultipart()
        message['From'] = sender_address
        message['To'] = receiver_address
        message['Subject'] = subject

        message.attach(MIMEText(mail_content, 'plain'))

        session = smtplib.SMTP('smtp.gmail.com', 587)
        session.starttls()
        session.login(sender_address, sender_pass)
        text = message.as_string()
        session.sendmail(sender_address, receiver_address, text)
        session.quit()
