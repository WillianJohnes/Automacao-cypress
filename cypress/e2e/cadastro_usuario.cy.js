/// <reference types="cypress" />

import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'
import { faker } from '@faker-js/faker'


describe('LoginCadastro de usuário', () => {

    beforeEach('Acessar cadastro de Usuário', () => {
        commum_page.acessarCadastroUsuario()
    })

    
    it('Campo Nome vazio', () => {
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')


    })
    it('Campo E-mail vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    })
    it('Campo E-mail inválido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.person.firstName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })
    it('Campo Senha vazio', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })
    it('Campo Senha invalido', () => {
        cadastro_page.preencheNome(faker.person.fullName())
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha('123')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })
    
    
    it('Login com Cadastro com sucesso', async () => {

        const name = await faker.person.fullName()

        cadastro_page.preencheNome(name)
        cadastro_page.preencheEmail(faker.internet.email())
        cadastro_page.preencheSenha(faker.number.int())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(name)


    })

})