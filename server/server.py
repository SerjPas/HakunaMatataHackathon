from flask import Flask, request, json, render_template
from flask_cors import CORS
from classes.JsonEnc import JsonEnc
from classes.MysqlDB import MysqlDB
from classes.Email import Email
from classes.Sms import Sms

app = Flask(__name__, static_folder="./static/build", template_folder="./static")
CORS(app)
sql_layer = MysqlDB()
mail = Email()
messages = Sms()
weather_data = None


@app.route("/")
def index():
    return "hello"


@app.route('/api/register', methods=['POST'])
def register_user():
    try:
        content = request.json
        sql_layer.set_user(content)
        msg = {"reply": "User registered."}
        status = 200
    except Exception as e:
        return str(e)

    return app.response_class(response=json.dumps(msg, indent=1, cls=JsonEnc),
                              status=status, mimetype='application/json')


@app.route('/api/weather/send', methods=['POST'])
def send_weather():
    try:
        message = "this is a test 2"

        emails = sql_layer.get_email_list()
        phones = sql_layer.get_phone_list()

        mail.send_mail("Weather information forecast",
                       message,
                       emails)

        for number in phones:
            messages.send_sms(message, number)

        msg = {"reply": "Notifications sent."}

        status = 200

    except Exception as e:
        return str(e)

    return app.response_class(response=json.dumps(msg, indent=1, cls=JsonEnc),
                              status=status, mimetype='application/json')


@app.route('/api/weather/get', methods=['GET'])
def get_weather():
    try:
        msg = [{"Day": "08/25/2020",
                "Temperature": "31C",
               },
               {"Day": "08/26/2020",
                "Temperature": "32C",
                },
               {"Day": "08/27/2020",
                "Temperature": "33C",
                },
               {"Day": "08/28/2020",
                },
               {"Day": "08/29/2020",
                "Temperature": "35C",
                },
               {"Day": "08/30/2020",
                "Temperature": "36C",
                }
               ]
        status = 200
        weather_data = msg

    except Exception as e:
        return str(e)

    return app.response_class(response=json.dumps(msg, indent=1, cls=JsonEnc),
                              status=status, mimetype='application/json')


@app.route('/api/list', methods=['GET'])
def get_user_list():
    status = 400
    msg = {"status": "Unable to retrieve data."}

    try:
        msg = sql_layer.get_all_users()
        status = 200

    except Exception as error:
        print(error)

    return app.response_class(response=json.dumps(msg, indent=1, cls=JsonEnc),
                              status=status, mimetype='application/json')


if __name__ == "__main__":
    app.run()
