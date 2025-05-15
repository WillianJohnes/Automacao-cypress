/// <reference types="cypress" />

import commum_page from '../support/pages/commum_page'
import login_page from '../support/pages/login_page'
import { faker } from '@faker-js/faker'


describe('Login de usuário', () => {

    beforeEach('Acessar cadastro de Usuário', () => {
            commum_page.acessarLogin()
    })
    it('Campo E-mail vazio', () => {
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    }),

    it('Campo E-mail inválido', () => {
        login_page.preencheEmail(faker.person.firstName())
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    }),
    it('Campo Senha vazio', () =>{
    login_page.preencheEmail(faker.internet.email())
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    }),
    it('Campo Senha inválido', () =>{
        login_page.preencheEmail(faker.internet.email())
        login_page.preencheSenha('113')
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    }),
    
    
    it('Login com sucesso', async () => {

        const email = await faker.internet.email()

        login_page.preencheEmail(email)
        login_page.preencheSenha(faker.number.float())
        login_page.clicarLembrardeMim()
        login_page.clicarLogin()
        login_page.validarMensagemSucesso(email)


    })

})