
const yearDiv = document.getElementById('year');
yearDiv.value = new Date().getFullYear();

function validateForm() {
    const name = document.getElementById('name')?.value;
    const firstName = document.getElementById('first-name')?.value;
    const month = document.getElementById('month')?.value;
    const year = document.getElementById('year')?.value;
    const distance = document.getElementById('distance')?.value;
    const day_nb = document.getElementById('day_nb')?.value;

    const text = `J’atteste sur l’honneur avoir utilisé mon vélo personnel, pour le mois ${month} ${year}, ${day_nb} jours ouvrés pour effectuer tout ou partie du trajet domicile/travail soit une distance par jour de ${distance}km aller et retour. \nCette attestation servira de base au calcul du montant des indemnités kilométriques vélo qui me sera versé. \nJ’ai bien noté que le montant de l’indemnité est plafonné à 200 € net par an.`;
    console.log(text);
    const textLetterDiv = document.getElementById('text-letter');
    const signatureTextLetterDiv = document.getElementById('signature-letter-text');
    const lettterDiv = document.getElementById('letter');
    textLetterDiv.innerText = text;
    signatureTextLetterDiv.innerText = name + " " + firstName;
    lettterDiv.style.display = "flex";
    alert("indemnité estimée pour ce mois : " + (0.25*distance*day_nb) + "€\n(montant de l’indemnité est plafonné à 200 € net par an)");
    alert("Choisir la destination : \"Enregistrer au format pdf\" et décocher l'option \"En-tête et pieds de page\" dans \"Plus de paramètres\"")
    window.print();
}


function readURL(input) {
    var url = input.value;
    debugger
    var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
    const signatureLetterImg = document.getElementById('signature-letter-img');
    if (input.files && input.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
        var reader = new FileReader();
        reader.onload = function (e) {
            signatureLetterImg.src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    } else{
         $('#signature-letter-img').attr('src', '/assets/no_preview.png');
    }
}