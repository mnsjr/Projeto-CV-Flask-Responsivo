from flask import Flask, render_template, redirect, request, flash
from flask_mail import Mail, Message
from config import email, senha

app = Flask(__name__)
app.secret_key = 'g2fht8deq9ew6c1t'


app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = email
app.config['MAIL_PASSWORD'] = senha
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True


mail = Mail(app)


class contato:
    def __init__(self, nome, email, mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem


@app.route('/')
def inicio():
    return render_template('inicio.html')
    

@app.route('/send', methods=['GET', 'POST'])
def send():
    if request.method == 'POST':
        form_contato = contato(request.form['nome'],
                                request.form['email'],
                                request.form['mensagem'])
        msg = Message(
            subject = (f'{form_contato.nome} envio uma mensagem pelo formulário de contato de Portifólio CV.'),
            sender = app.config.get('MAIL_USERNAME'),
            recipients = ['mnsjrti@gmail.com'],
            reply_to = request.form['email'],
            body = f"""
            Nome:  {form_contato.nome}
            Email:  {form_contato.email}
            Mensagem:

            {form_contato.mensagem}
            """
        )
        mail.send(msg)
        flash('Mensagem enviada com sucesso!')
    return redirect('/')



if __name__ == '__main__':
    app.run(debug=True)