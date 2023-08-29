import { LitElement, html } from "lit-element";
export class MyElement extends LitElement{
    
    render(){
        return html`
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
            <h1>Formulario de Vinculación de Candidatos</h1>
            <form action="procesar_vinculacion.php" method="post" enctype="multipart/form-data">
                <label for="nombre">Nombre completo:</label>
                <input type="text" id="nombre" name="nombre" required>
            
                <label for="correo">Correo electrónico:</label>
                <input type="email" id="correo" name="correo" required>
            
                <label for="telefono">Teléfono de contacto:</label>
                <input type="tel" id="telefono" name="telefono" required>
            
                <label for="documentos">Documentos requeridos (sube aquí):</label>
                <input type="file" id="documentos" name="documentos" accept=".pdf, .doc, .docx" required>
    
                <label for="comentarios">Comentarios adicionales:</label>
                <textarea id="comentarios" name="comentarios" rows="4" cols="50"></textarea>
            
                <button class= "btn btn.primary">Enviar Solicitud de Vinculación</button>
            </form>

        `;
    }
}

customElements.define('my-element', MyElement);