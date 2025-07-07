from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/linechart-data')
def linechart_data():
    # Dummy data: project costs over months for two cities
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        "datasets": [
            {
                "label": "City A",
                "data": [120, 150, 170, 160, 180, 200],
                "borderColor": "#3e95cd",
                "fill": False
            },
            {
                "label": "City B",
                "data": [100, 130, 140, 155, 165, 190],
                "borderColor": "#8e5ea2",
                "fill": False
            }
        ]
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(port=5000, debug=True) 