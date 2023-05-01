export const validate = (name, data) => {


    switch (name) {
        case 'name':
        case 'nombre':
        case 'payment':

            if (data === "") {
                return { message: "Rellena el campo porfavor" };
            } else if (!/[a-z]/gi.test(data)) {
                return { message: "Formato inválido" };
            }

            return { message: "" };

        case 'surname':
        case 'apellido':

            if (data === "") {
                return { message: "Rellena el campo porfavor" };
            } else if (!/[a-z]/gi.test(data)) {
                return { message: "Formato inválido" };
            }

            return { message: "" };

        case 'address':
        case 'direccion':

            if (data === "") {
                return { message: "Rellena el campo porfavor" };
            } else if (!/[A-Za-z0-9'\.\-\s\,]/gi.test(data)) {
                return { message: "Formato inválido" };
            }

            return { message: "" };

        case 'birthdate':
        case 'fechanacimiento':

            if (data === "") {
                return { message: "Rellena el campo porfavor" };
            } else if (!/[(?:19|20)\d\d]/gi.test(data)) {
                return { message: "Formato inválido" };
            }

            return { message: "" };


        case 'phone':
        case 'telefono':
            if (data === "") {
                return { message: "Rellena el campo porfavor" };
            } else if (!/^[0-9]{3}?[-\s\.]?[0-9]{3}?[-\s\.]?[0-9]{3}$/.test(data)) {
                return { message: "Formato inválido" };
            }

            return { message: "" };
        case 'email':
        case 'mail':
            if (data === "") {
                return { message: "Rellena el campo porfavor" };
            } else if (
                !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data)
            ) {
                return { message: "Formato inválido" };
            }

            return { message: "" };


        case 'password':
        case 'contraseña':
            if (data === "") {
                return { message: "Rellena el campo porfavor" };
            } else if (!/[\d()+-]/g.test(data)) {
                return { message: "Formato inválido" };
            }
            return { message: "" };

        default:
            break;
    }

}