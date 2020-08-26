import requests
from flask import Flask, request, json
from flask_cors import CORS

from classes.Email import Email
from classes.JsonEnc import JsonEnc
from classes.MysqlDB import MysqlDB
from classes.Sms import Sms

app = Flask(__name__, static_folder="./static/build", template_folder="./static")
CORS(app)
sql_layer = MysqlDB()
mail = Email()
messages = Sms()



@app.route('/api/register', methods=['POST'])
def register_user():
    try:
        content = request.json
        msg = sql_layer.set_user(content)
        # msg = {"reply": "User registered."}
        status = 200
    except Exception as e:
        return str(e)

    return app.response_class(response=json.dumps(msg, indent=1, cls=JsonEnc),
                              status=status, mimetype='application/json')


@app.route('/api/weather/send', methods=['GET'])
def send_weather():
    try:
        r = requests.get('https://hakuna-matata-weather.herokuapp.com/predict_7_days')
        weather_data = r.json()
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


@app.route('/api/weather/user/<user_id>', methods=['GET'])
def send_weather_single(user_id):
    try:
        r = requests.get('https://hakuna-matata-weather.herokuapp.com/predict_7_days')
        weather_data = r.json()
        message = str(weather_data)
        contact_info = sql_layer.get_user_contact_info(user_id)

        if contact_info[0] != "N/A":
            mail.send_mail("Weather information forecast",
                           message,
                           contact_info[0])

        if contact_info[1] != "N/A":
            messages.send_sms(message, contact_info[1])

        msg = {"reply": "Notification sent."}
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
        id = sql_layer.del_user(user_id)
        msg = {"deleted": id}
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
