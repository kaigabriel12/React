from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/add', methods=['POST'])
def add_numbers():
    data = request.get_json()
    num1 = data['num1']
    num2 = data['num2']
    result = float(num1) + float(num2)
    response = {'result': result}
    return jsonify(response)

if __name__ == '__main__':
    app.run(port=5000)
