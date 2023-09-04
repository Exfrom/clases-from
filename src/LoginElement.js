import { LitElement, html, css } from "lit-element";

class LoginElement extends LitElement {

    
    constructor() {
        super();
        this.username = '';
        this.password = '';
        this.loggedIn = false;
    }
    static get properties() {
        return {
            username: {
                type: String
            },
            password: {
                type: String
            },
            
            loggedIn: {
                type: Boolean
            }
        }
    }

    login() {
        // En una aplicación real, debes realizar una solicitud HTTP al servidor para verificar las credenciales.
        // Aquí, se proporciona un ejemplo simple de autenticación en el lado del cliente:

        if (this.username === 'usuario' && this.password === 'contraseña') {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }
    }

    render() {
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>

            <div class="container">
                <h1>Iniciar sesión</h1>
                <form @submit="${this.login}">
                    <label for="username">Usuario:</label>
                    <input type="text" id="username" name="username" .value="${this.username}">
                    <br>

                    <label for="password">Contraseña:</label>
                    <input type="password" id="password" name="password" .value="${this.password}">
                    <br>

                    <input type="submit" value="Iniciar sesión">
                </form>

                ${this.loggedIn
                    ? html`<p>Bienvenido, ${this.username}!</p>`
                    : html``}
            </div>
        `;
    }
}

customElements.define('login-element', LoginElement);