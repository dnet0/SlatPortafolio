export interface ContactDTO {
    title:               string;
    subtitle:            string;
    form:                Form;
    data:                Data;
    oferta:              Oferta;
    confirmationMessage: ConfirmationMessage;
}

export interface ConfirmationMessage {
    title:    string;
    subtitle: string;
}

export interface Data {
    title:          string;
    telefonoTitle:  string;
    emailTitle:     string;
    ubicacionTitle: string;
}

export interface Form {
    title:              string;
    inputNombre:        string;
    placeHolderNombre:  string;
    inputEmail:         string;
    placeHolderEmail:   string;
    inputAsunto:        string;
    placeHolderAsunto:  string;
    inputMensaje:       string;
    placeHolderMensaje: string;
    submit:             string;
    submiting: string;
}

export interface Oferta {
    title:       string;
    description: string;
}
