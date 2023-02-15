from flask import request
import pandas as pd
import json
import numpy
import re

data = pd.read_csv('../data/dataset.csv')

"""
Create routes
"""
def create_routes(app):

    """
    Car list
    """
    # Arbo counters
    @app.route('/api/cars/list', methods=['GET'])
    def get_carlist():
        carlist = data['carmodel'].unique()
        numpyArray = numpy.array(carlist)
        df = pd.DataFrame(numpyArray, columns=['cars'])
        df.index += 1
        res = df['cars'].map(lambda x: x.lstrip().strip('\n'))#re.sub('[^A-Za-z0-9]+', '', x))
        return res.to_json()
        #a = df['column name'].unique()