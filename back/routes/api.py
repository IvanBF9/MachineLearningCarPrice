from flask import request
import pandas as pd

data = pd.read_csv('../data/dataset.csv')

"""
Create routes
"""
def create_routes(app):

    """
    Tree structure data
    """
    # Arbo counters
    @app.route('/api/test', methods=['GET'])
    def test_function():
        return 'Hello World !'
        #a = df['column name'].unique()