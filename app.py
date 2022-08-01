from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def inicio():
    return render_template('inicio.html')

@app.route('/sobre')
def sobre():
    return render_template('sobre.html')
    

if __name__ == '__main__':
    app.run(debug=True)