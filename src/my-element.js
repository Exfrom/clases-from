import { LitElement, html } from "lit-element";


export class MyElement extends LitElement {

    constructor() {
        super();
        this.username = '';
        this.password = '';
        this.email = '';
        this.show = false;
    }


    static get properties() {
        return {
            username: {
                type: String
            },
            password: {
                type: String
            },
            email: {
                type: String
            },
            show: {
                type: Boolean
            }
        }
    }




    setValue() {
        this.username = this.shadowRoot.querySelector('#username').value;
        this.password = this.shadowRoot.querySelector('#password').value;
        this.email = this.shadowRoot.querySelector('#email').value;
        this.show = true;
    }




    render() {
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>

            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <br>
                        <br>
                        <br>
                    </div>
                </div>
                <div class="row">
                    <div class="col"></div>
                    <div class="col">
                        <div class="card">
                        
                            <div class="card-body">
                                ${this.show ? html`
                            <div class="input-group flex-nowrap" >
                                <span class="input-group-text">Username</span>
                                <input type="text" class="form-control" id="username" placeholder="" >
                            </div>` : html``}
                                
                                <br>
                                
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text" id="">Password</span>
                                    <input type="text" id="password" class="form-control" placeholder="Contraseña" aria-label="Username" aria-describedby="addon-wrapping">
                                </div>
                                <br>
                                <div class="input-group flex-nowrap">
                                    <span class="input-group-text" id="">Email</span>
                                    <input type="text" class="form-control" id="email" placeholder="Correo electronico" aria-label="Username" aria-describedby="addon-wrapping">
                                </div>
                                <br>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary" expand="block" @click=${() => this.setValue()}>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">

                        
                    
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <label>${this.username}</label><br>
                        <label>${this.password}</label><br>
                        <label>${this.email}</label>
                    </div>
                </div>
            </div>
        ` ;
    }
}


customElements.define('my-element', MyElement);
