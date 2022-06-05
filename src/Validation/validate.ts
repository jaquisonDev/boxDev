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

    // Validações do cadastro de aluno
    fieldsRegisters: {
        infoPessoais: (name: string, cpf: string, rg: string, sus: string, certNasc: string, stateCivil: string) => {
            // -------Validando as strings
            // Nome
            let names = /([A-z\s]{2,})/gm;
            let validName = names.test(name);
            console.log(`Nome: ${validName}`); //Debugando

            // Estado Civil
            let stateC = /([A-z]{8})/gm;
            let validStateC = stateC.test(stateCivil);
            console.log(`Estado Civil: ${validStateC}`); //Debugando

            // ----------Validando os campos numericos
            // CPF
            let cpfs = /([0-9]{11})/gm;
            let validCpf = cpfs.test(cpf);
            console.log(`Cpf: ${validCpf}`);

            // RG
            let rgs = /([0-9]{10})/gm;
            let validRg = rgs.test(rg);
            console.log(`Rg: ${validRg}`);

            // SUS
            let cartSus = /([0-9]{15})/gm;
            let validCartSus = cartSus.test(sus);
            console.log(`Cartão sus: ${validCartSus}`);

            // CERTIDÃO DE NASC.
            let certNas = /([0-9]{11})/gm;
            let validCertNas = certNas.test(certNasc);
            console.log(`Certidão: ${validCertNas}`);
        },
        infoAddress: (address: string, state: string, city: string) => {
            // Validando o endereço
            let add = /^([A-z0-9\s\,\-]{2,})$/gm;
            let validAdd = add.test(address);
            console.log(`Endereço: ${validAdd}`);

            // Validando o estado
            let states = /^([A-z\s]{2,})$/gm;
            let validStates = states.test(state);
            console.log(`Estado: ${validStates}`);

            // Validando a cidade
            let citys = /^([A-z\s]{2,})$/gm;
            let validCity = states.test(city);
            console.log(`Cidade: ${validCity}`);
        },
        infoExtras: (vicio: string, enf: string, preso: string, disp: string,  article: string, process: string) => {
            // Validação de strings
            let vicios = /^([A-zÀ-ú]{2,})$/gm;
            let validVicio = vicios.test(vicio)
            console.log(`Vicio: ${validVicio}`);

            let enferm = /^([A-zÀ-ú])$/gm;
            let validEnf = enferm.test(enf);
            console.log(`Enfermidade: ${enf}`);

            let pres = /^([A-zÀ-ú])$/gm;
            let validPres = pres.test(preso);
            console.log(`Preso: ${validPres}`);
            
            let dis = /^([A-zÀ-ú])$/gm;
            let validDis = dis.test(preso);
            console.log(`Disposto: ${validDis}`);

            // Números ou strings
            let artc = /^([A-zÀ-ú0-9\/\-]{2,})$/gm;
            let validArt = artc.test(article);
            console.log(`Artigo: ${validArt}`);

            let proces = /^([A-zÀ-ú0-9\/\-]{2,})$/gm;
            let validProces = proces.test(article);
            console.log(`Processo: ${validProces}`);

        },
        infoResp: (nameMother: string, nameFather: string, phone: string) => {
            // Validando info dos responsaveis
            let nameM = /^([A-zÀ-ú\s]{2,})$/gm;
            let validName = nameM.test(nameMother);
            console.log(`Processo: ${validName}`);

            let nameF = /^([A-zÀ-ú])$/gm;
            let validNameF = nameM.test(nameFather);
            console.log(`Processo: ${validNameF}`);
        }
    }
}