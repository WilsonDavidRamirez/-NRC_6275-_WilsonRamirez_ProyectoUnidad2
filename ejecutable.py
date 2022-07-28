import os #importacion de la biblioteca/modulo so para las acciones del sistema operativo
from flask import Flask, render_template #importacion de Flask para nuestra aplicacion web

app = Flask(__name__, template_folder='templates/layouts') #variable que guardara nuestro archivos html
app._static_folder = os.path.abspath('templates/static/') # directorio de nuestro archivos HTML

@app.route('/') #pagina principal
def inicio():
    return render_template('paginaPrincipal.html') #renderizado de la pagina principal

@app.route('/Juego' )
def juego():
    return render_template('juego.html')

@app.route('/LoginDocente' )
def docente():
    return render_template('loginDocente.html')

@app.route('/LoginEstudiante' )
def estudiante():
    return render_template('loginEstudiante.html')

@app.route('/Notas' )
def notas():
    return render_template('notas.html')
    

if __name__ == '__main__':
    app.run(debug=True)