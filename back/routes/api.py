from flask import request

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