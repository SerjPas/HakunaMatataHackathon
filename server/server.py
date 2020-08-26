from flask import Flask, request, json, render_template
from flask_cors import CORS
from classes.JsonEnc import JsonEnc
from classes.MysqlDB import MysqlDB
from classes.Email import Email
from classes.Sms import Sms
import requests

app = Flask(__name__, static_folder="./static/build", template_folder="./static")
CORS(app)
sql_layer = MysqlDB()
mail = Email()
messages = Sms()
r = requests.get('https://hakuna-matata-weather.herokuapp.com/predict_7_days')
weather_data = r.json()


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
        message = str(weather_data)

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
        res = requests.get('https://hakuna-matata-weather.herokuapp.com/predict_7_days')
        weather_data = res.json()
        msg = weather_data
        status = 200

    except Exception as e:
        return str(e)

    return app.response_class(response=json.dumps(msg, indent=1, cls=JsonEnc),
                              status=status, mimetype='application/json')


@app.route('/api/<user_id>', methods=['GET'])
def get_user(user_id):
    try:
        msg = sql_layer.get_user(user_id)
        status = 200

    except Exception as e:
        return str(e)

    return app.response_class(response=json.dumps(msg, indent=1, cls=JsonEnc),
                              status=status, mimetype='application/json')


@app.route('/api/delete/<user_id>', methods=['GET'])
def del_user(user_id):
    try:
        sql_layer.del_user(user_id)
        msg = {"reply": "user deleted"}
        status = 200

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
