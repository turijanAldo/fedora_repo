function validText(text, control) {
    let regexCSpecial = new RegExp('^[a-zñ A-ZÑ]+$');
    if (!regexCSpecial.test(text.target.value) && text.target.value != "") {
        $(control).addClass("is-invalid");
    } else {
        $(control).removeClass("is-invalid");
    }
}

function validNumber(text, control) {
    let regexCSpecial = new RegExp('^[0-9]+$');
    if (!regexCSpecial.test(text.target.value) && text.target.value != "") {
        $(control).addClass("is-invalid");
    } else {
        $(control).removeClass("is-invalid");
    }
}

function validEmail(text, control) {
    let regexEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$");
    if (!regexEmail.test(text.target.value) && text.target.value != "") {
        $(control).addClass("is-invalid");
    } else {
        $(control).removeClass("is-invalid");
    }

}

function toggle() {
    $("#wrapper").toggleClass("toggled");
    $("#icon-m").toggleClass('fa-arrow-circle-right')
}

$("body").tooltip({
    selector: '[data-toggle="tooltip"]'
});


function ObtenerPerfil(valor) {
    id = $(valor).val();
    descripcion = $('#descripcion' + id).text();
    fechaAlta = $('#fechaAlta' + id).text();
    fechaModificacion = $('#fechaModificacion' + id).text();
    idUsuarioAlta = $('#idUsuarioAlta' + id).text();
    idUsuarioModificacion = $('#idUsuarioModificacion' + id).text();
    idCatStatus = $('#idCatEstatus' + id).val();
    $('#txtEditIdPerfil').val(id);
    $('#txtEditDescripcion').val(descripcion);
    $('#txtEditFechaAlta').val(fechaAlta);
    $('#txtEditFechaModificacion').val(fechaModificacion);
    $('#txtEditUsuarioAlta').val(idUsuarioAlta);
    $('#txtEditUsuarioModificación').val(idUsuarioModificacion);
    $('#txtEditEstatus').val(idCatStatus);
};

function ObtenerExperiencia(valor) {
    id = $(valor).val();
    descripcion = $('#descripcion' + id).text();
    fechaAlta = $('#fechaAlta' + id).text();
    fechaModificacion = $('#fechaModificacion' + id).text();
    idUsuarioAlta = $('#idUsuarioAlta' + id).text();
    idUsuarioModificacion = $('#idUsuarioModificacion' + id).text();
    idCatStatus = $('#idCatEstatus' + id).val();
    $('#txtEditIdExperiencia').val(id);
    $('#txtEditDescripcion').val(descripcion);
    $('#txtEditFechaAlta').val(fechaAlta);
    $('#txtEditFechaModificacion').val(fechaModificacion);
    $('#txtEditUsuarioAlta').val(idUsuarioAlta);
    $('#txtEditUsuarioModificación').val(idUsuarioModificacion);
    $('#txtEditEstatus').val(idCatStatus);
};

function ObtenerUsuario(valor) {
    id = $(valor).val();
    nombre = $('#nombre' + id).val();
    apellidoP = $('#apellidoP' + id).val();
    apellidoM = $('#apellidoM' + id).val();
    correo = $('#correo' + id).val();
    usuario = $('#usuario' + id).text();
    perfil = $("#perfil" + id).val();
    fechaAlta = $('#fechaAlta' + id).text();
    fechaModificacion = $('#fechaModificacion' + id).text();
    usuarioAlta = $('#usuarioAlta' + id).text();
    usuarioModificacion = $('#usuarioModificacion' + id).text();
    console.log(perfil);
    $('#txtEditIdUsuario').val(id);
    $('#txtEditNombre').val(nombre);
    $('#txtEditApep').val(apellidoP);
    $('#txtEditApem').val(apellidoM);
    $('#txtEditCorreo').val(correo);
    $('#txtEditUsuario').val(usuario);
    $('#txtEditFechaAlta').val(fechaAlta);
    $('#txtEditFechaModificacion').val(fechaModificacion);
    $('#txtEditUsuarioAlta').val(usuarioAlta);
    $('#txtEditUsuarioModificacion').val(usuarioModificacion);
};