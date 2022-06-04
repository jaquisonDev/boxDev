import React, { ReactHTMLElement } from 'react';

// Validações Gerais
export const Validation = {
    submitForm: (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    },

    // Validações da página login
    fieldsLogin: (email: string, password: string) => {
        // ---------------Regex
        // Email
        let validEmails = /^([A-z0-9]{2,})\@([A-z0-9]{2,})\.([A-z]{3})$/gm;
        let fieldEmail = validEmails.test(email);

        // Password
        let validPass = /([A-z0-9\!\@\#\$\%\&\*]{8,})/gm;
        let fieldPass = validPass.test(password);

        return {fieldEmail, fieldPass};
    },

    // 
}