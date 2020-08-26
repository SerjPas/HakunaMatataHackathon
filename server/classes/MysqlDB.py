import mysql.connector


class MysqlDB:

    def __init__(self):
        self._mydb = None
        self._my_cursor = None

    def connect(self):
        self._mydb = mysql.connector.connect(
            host="localhost",
            port="3306",
            user="root",
            password="12345045",
            database="hackaton"
        )
        self._my_cursor = self._mydb.cursor()

    def close_connection(self):
        if self._mydb.is_connected():
            self._my_cursor.close()
            self._mydb.close()

    def get_user(self, user_id):
        user_dict = {}
        try:
            self.connect()
            user_select_query = "SELECT user_id, user_name, user_email, user_phone FROM users WHERE user_id=%s"
            self._my_cursor.execute(user_select_query, (user_id,))
            mysql_response_list = self._my_cursor.fetchall()
            for user in mysql_response_list:
                user_dict = {"user_id": user[0],
                             "user_name": user[1],
                             "user_email": user[2],
                             "user_phone": user[3]}

        except mysql.connector.Error as error:
            print("Failed to insert record into MySQL table {}".format(error))

        finally:
            self.close_connection()
            return user_dict

    def del_user(self, user_id):
        try:
            self.connect()
            user_select_query = "DELETE FROM users WHERE user_id=%s"
            self._my_cursor.execute(user_select_query, (user_id,))
            self._mydb.commit()
            return user_id

        except mysql.connector.Error as error:
            print("Failed to insert record into MySQL table {}".format(error))

        finally:
            self.close_connection()

    def get_all_users(self):
        user_list = []

        try:
            self.connect()
            user_select_query = "SELECT user_id, user_name, user_email, user_phone FROM users"
            self._my_cursor.execute(user_select_query)
            mysql_response_list = self._my_cursor.fetchall()
            for user in mysql_response_list:
                user_list.append({"user_id": user[0],
                                  "user_name": user[1],
                                  "user_email": user[2],
                                  "user_phone": user[3]})

        except mysql.connector.Error as error:
            print("Failed to insert record into MySQL table {}".format(error))

        finally:
            self.close_connection()
            return user_list

    def get_email_list(self):
        email_string = ""

        try:
            self.connect()
            user_select_query = "SELECT user_email FROM users WHERE user_email_allow=1"
            self._my_cursor.execute(user_select_query)
            mysql_response_list = self._my_cursor.fetchall()
            for user in mysql_response_list:
                email_string += user[0] + "; "

        except mysql.connector.Error as error:
            print("Failed to insert record into MySQL table {}".format(error))

        finally:
            self.close_connection()
            return email_string

    def get_phone_list(self):
        phone_list = []

        try:
            self.connect()
            user_select_query = "SELECT user_phone FROM users WHERE user_phone_allow=1"
            self._my_cursor.execute(user_select_query)
            mysql_response_list = self._my_cursor.fetchall()
            for user in mysql_response_list:
                phone_list.append(user[0])

        except mysql.connector.Error as error:
            print("Failed to insert record into MySQL table {}".format(error))

        finally:
            self.close_connection()
            return phone_list

    def set_user(self, user_data):
        try:
            phone_allow = 0
            email_allow = 0
            if user_data['user_phone'] != "N/A":
                phone_allow = 1
            if user_data['user_email'] != "N/A":
                email_allow = 1

            user_tuple = (user_data['user_name'],
                          user_data['user_email'],
                          user_data['user_phone'],
                          phone_allow,
                          email_allow,)
            self.connect()
            user_select_query = "INSERT INTO users " \
                                "(user_name, user_email, user_phone, user_phone_allow, user_email_allow) " \
                                "VALUES (%s, %s, %s, %s, %s)"

            self._my_cursor.execute(user_select_query, user_tuple)
            student_id = self._my_cursor.lastrowid
            self._mydb.commit()
            user_data['user_id'] = student_id
            return user_data

        except mysql.connector.Error as error:
            print("Failed to insert record into MySQL table {}".format(error))

        finally:
            self.close_connection()


if __name__ == "__main__":
    user_dictionary = {"user_name": "John Doe",
                       "user_email": "johndoe@mail.com",
                       "user_phone": "555112233"}

    sql = MysqlDB()

    # sql.set_user(user_dictionary)
    print(sql.get_user(10))
