'use client';

import React, { useState } from 'react';

const ChallengeDetails = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navegação */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center">
              <div className="flex flex-shrink-0 items-center">
                <span className="text-xl font-bold text-purple-900">
                  IFTM Genesis
                </span>
              </div>
              <div className="hidden md:ml-8 md:flex md:space-x-8">
                <a
                  href="#"
                  className="border-b-2 border-purple-900 px-1 pt-5 pb-3 font-medium text-gray-800"
                >
                  Desafios
                </a>
                <a
                  href="#"
                  className="border-b-2 border-transparent px-1 pt-5 pb-3 font-medium text-gray-500 hover:border-purple-900 hover:text-gray-800"
                >
                  Mentoria
                </a>
                <a
                  href="#"
                  className="border-b-2 border-transparent px-1 pt-5 pb-3 font-medium text-gray-500 hover:border-purple-900 hover:text-gray-800"
                >
                  Comunidade
                </a>
                <a
                  href="#"
                  className="border-b-2 border-transparent px-1 pt-5 pb-3 font-medium text-gray-500 hover:border-purple-900 hover:text-gray-800"
                >
                  Blog
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-3 rounded-full bg-purple-100 px-3 py-1 text-sm text-purple-900">
                <span className="font-bold">350</span> XP
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-200">
                <span className="text-sm font-bold text-purple-900">JS</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-500">
            <a href="#" className="hover:text-purple-900">
              Desafios
            </a>{' '}
            &gt;{' '}
            <a href="#" className="hover:text-purple-900">
              Frontend
            </a>{' '}
            &gt; <span className="text-gray-700">Todo App com React</span>
          </div>
        </div>
      </div>

      {/* Banner do desafio */}
      <div className="bg-purple-900 text-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 flex items-center">
                <span className="mr-2 rounded bg-yellow-100 px-2 py-1 text-xs text-yellow-800">
                  Intermediário
                </span>
                <span className="text-sm text-purple-200">
                  Estimado: 6-8 horas
                </span>
              </div>
              <h1 className="mb-2 text-3xl font-bold">Todo App com React</h1>
              <p className="mb-4 text-purple-200">
                Crie um aplicativo de lista de tarefas completo com React e
                aprenda os fundamentos de gerenciamento de estado.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded bg-purple-800 px-2 py-1 text-xs text-purple-100">
                  React
                </span>
                <span className="rounded bg-purple-800 px-2 py-1 text-xs text-purple-100">
                  JavaScript
                </span>
                <span className="rounded bg-purple-800 px-2 py-1 text-xs text-purple-100">
                  CSS
                </span>
                <span className="rounded bg-purple-800 px-2 py-1 text-xs text-purple-100">
                  Hooks
                </span>
              </div>
            </div>
            <div className="mt-6 md:mt-0">
              <button className="rounded-md bg-yellow-600 px-6 py-3 font-semibold text-white hover:bg-yellow-700">
                Iniciar Desafio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progresso */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="w-full">
              <div className="mb-1 flex justify-between text-sm text-gray-600">
                <span>Progresso</span>
                <span>0%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-gray-200">
                <div className="h-2 w-0 rounded-full bg-purple-900"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-800">
                Sobre este desafio
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="mb-1 text-sm text-gray-500">Dificuldade</p>
                  <p className="font-medium text-gray-800">Intermediário</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-500">Tempo estimado</p>
                  <p className="font-medium text-gray-800">6-8 horas</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-500">XP ao completar</p>
                  <p className="font-medium text-yellow-600">750 XP</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-500">Prazo sugerido</p>
                  <p className="font-medium text-gray-800">7 dias</p>
                </div>
                <div>
                  <p className="mb-1 text-sm text-gray-500">Submissões</p>
                  <p className="font-medium text-gray-800">
                    2384 participantes
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-800">
                Pré-requisitos
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span className="text-gray-600">
                    Conhecimento básico de JavaScript
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span className="text-gray-600">
                    Familiaridade com HTML e CSS
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  <span className="text-gray-600">Noções básicas de React</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-gray-300">○</span>
                  <span className="text-gray-500">
                    Experiência com React Hooks (recomendado)
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-gray-800">
                Recursos recomendados
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center text-purple-900 hover:underline"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                    </svg>
                    Documentação do React
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-purple-900 hover:underline"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                    </svg>
                    Tutorial: React Hooks
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-purple-900 hover:underline"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Curso introdutório de React (vídeo)
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center text-purple-900 hover:underline"
                  >
                    <svg
                      className="mr-2 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    FAQ sobre gerenciamento de estado
                  </a>
                </li>
              </ul>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <button className="flex items-center text-sm font-medium text-purple-900 hover:underline">
                  <svg
                    className="mr-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                  </svg>
                  Ver todos os recursos
                </button>
              </div>
            </div>
          </div>

          {/* Conteúdo principal */}
          <div className="lg:col-span-2">
            {/* Abas */}
            <div className="mb-6 border-b border-gray-200">
              <nav className="-mb-px flex">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`mr-8 border-b-2 py-4 text-sm font-medium ${
                    activeTab === 'description'
                      ? 'border-purple-900 text-purple-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Descrição
                </button>
                <button
                  onClick={() => setActiveTab('steps')}
                  className={`mr-8 border-b-2 py-4 text-sm font-medium ${
                    activeTab === 'steps'
                      ? 'border-purple-900 text-purple-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Passo a passo
                </button>
                <button
                  onClick={() => setActiveTab('submission')}
                  className={`mr-8 border-b-2 py-4 text-sm font-medium ${
                    activeTab === 'submission'
                      ? 'border-purple-900 text-purple-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Entrega
                </button>
                <button
                  onClick={() => setActiveTab('discussion')}
                  className={`border-b-2 py-4 text-sm font-medium ${
                    activeTab === 'discussion'
                      ? 'border-purple-900 text-purple-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  Discussão
                </button>
              </nav>
            </div>

            {/* Conteúdo da aba */}
            {activeTab === 'description' && (
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-gray-800">
                  Descrição do Desafio
                </h2>

                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    Neste desafio, você irá criar um aplicativo de lista de
                    tarefas (Todo App) completo usando React. Esta é uma
                    oportunidade excelente para praticar os conceitos
                    fundamentais do React, incluindo componentes, props, estado,
                    e efeitos.
                  </p>

                  <div className="mb-6 border-l-4 border-purple-900 bg-purple-50 p-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">
                      Objetivos de Aprendizado
                    </h3>
                    <ul className="list-disc space-y-1 pl-5 text-gray-600">
                      <li>
                        Compreender e aplicar o gerenciamento de estado no React
                      </li>
                      <li>
                        Implementar operações CRUD (Criar, Ler, Atualizar,
                        Deletar) em uma aplicação React
                      </li>
                      <li>Trabalhar com formulários e inputs controlados</li>
                      <li>
                        Organizar seu código usando componentes reutilizáveis
                      </li>
                      <li>
                        Implementar persistência de dados usando localStorage
                      </li>
                    </ul>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    Requisitos Funcionais
                  </h3>
                  <p className="mb-2">
                    Seu aplicativo de lista de tarefas deve incluir as seguintes
                    funcionalidades:
                  </p>

                  <ol className="mb-6 list-decimal space-y-2 pl-5">
                    <li>
                      Adicionar uma nova tarefa com título e descrição opcional
                    </li>
                    <li>
                      Marcar uma tarefa como concluída (e desmarcar se
                      necessário)
                    </li>
                    <li>Editar uma tarefa existente</li>
                    <li>Excluir uma tarefa</li>
                    <li>
                      Filtrar tarefas por status (todas, ativas, concluídas)
                    </li>
                    <li>
                      Armazenar tarefas localmente para persistir dados entre
                      sessões
                    </li>
                    <li>
                      Interface responsiva que funciona bem em dispositivos
                      móveis e desktop
                    </li>
                  </ol>

                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    Requisitos Técnicos
                  </h3>
                  <ul className="mb-6 list-disc space-y-2 pl-5">
                    <li>
                      Utilizar React (create-react-app ou Vite são recomendados
                      para iniciar)
                    </li>
                    <li>
                      Gerenciar estado com React Hooks (useState, useEffect)
                    </li>
                    <li>Implementar pelo menos 3 componentes reutilizáveis</li>
                    <li>Usar localStorage para persistência de dados</li>
                    <li>
                      Estilizar a aplicação (CSS puro, CSS Modules, Styled
                      Components ou outras bibliotecas são aceitas)
                    </li>
                    <li>Código limpo e comentado</li>
                    <li>
                      README com instruções claras para execução do projeto
                    </li>
                  </ul>

                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    Bônus (Opcional)
                  </h3>
                  <p className="mb-2">
                    Para um desafio adicional, você pode implementar:
                  </p>

                  <ul className="mb-6 list-disc space-y-2 pl-5">
                    <li>Organização por categorias ou tags</li>
                    <li>
                      Funcionalidade de arrastar e soltar para reordenar tarefas
                    </li>
                    <li>Data de vencimento para tarefas e alertas visuais</li>
                    <li>
                      Animações e transições para melhorar a experiência do
                      usuário
                    </li>
                    <li>Testes unitários para seus componentes</li>
                  </ul>

                  <div className="mb-6 border-l-4 border-yellow-600 bg-yellow-50 p-4">
                    <h3 className="mb-2 text-lg font-semibold text-gray-800">
                      Dicas para Sucesso
                    </h3>
                    <ul className="list-disc space-y-1 pl-5 text-gray-600">
                      <li>
                        Comece planejando a estrutura de dados para suas tarefas
                      </li>
                      <li>
                        Divida seu aplicativo em componentes pequenos e focados
                      </li>
                      <li>
                        Implemente uma funcionalidade por vez e teste cada uma
                        antes de seguir
                      </li>
                      <li>Use o console.log para depurar quando necessário</li>
                      <li>
                        Consulte a documentação do React se encontrar problemas
                      </li>
                    </ul>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-gray-800">
                    Exemplo de Estrutura de Dados
                  </h3>
                  <p className="mb-2">
                    Aqui está um exemplo de como você pode estruturar seus dados
                    de tarefas:
                  </p>

                  <pre className="mb-6 overflow-x-auto rounded-md bg-gray-800 p-4 text-white">
                    {`const tasks = [
  {
    id: 1,
    title: "Completar desafio React",
    description: "Terminar o Todo App para o IFTM Genesis",
    completed: false,
    createdAt: "2025-03-10T10:00:00Z"
  },
  {
    id: 2,
    title: "Estudar hooks",
    description: "Revisar useState e useEffect",
    completed: true,
    createdAt: "2025-03-09T14:30:00Z"
  }
]`}
                  </pre>

                  <p>
                    Estamos ansiosos para ver sua implementação! Lembre-se de
                    que o objetivo principal é aprender e melhorar suas
                    habilidades. Não hesite em consultar os recursos fornecidos
                    e pedir ajuda à comunidade quando necessário.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'steps' && (
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-gray-800">
                  Passo a Passo
                </h2>

                <p className="mb-6 text-gray-600">
                  Siga essas etapas para completar seu desafio de Todo App. Cada
                  etapa foi projetada para ajudá-lo a construir o aplicativo de
                  maneira progressiva e gerenciável.
                </p>

                {/* Etapa 1 */}
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
                  <button
                    className="flex w-full items-center justify-between bg-gray-50 p-4 text-left"
                    onClick={() => toggleAccordion(0)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                        <span className="font-bold text-purple-900">1</span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        Configuração do Projeto
                      </span>
                    </div>
                    <svg
                      className={`h-5 w-5 transform text-gray-500 ${openAccordion === 0 ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {openAccordion === 0 && (
                    <div className="border-t border-gray-200 p-4">
                      <div className="prose max-w-none text-gray-600">
                        <h4 className="mb-2 text-base font-semibold">
                          O que você vai fazer:
                        </h4>
                        <ul className="mb-4 list-disc pl-5">
                          <li>Configurar um novo projeto React</li>
                          <li>Criar a estrutura de pastas básica</li>
                          <li>Preparar os componentes iniciais</li>
                        </ul>

                        <h4 className="mb-2 text-base font-semibold">
                          Instruções detalhadas:
                        </h4>

                        <ol className="list-decimal space-y-3 pl-5">
                          <li>
                            <p>
                              <strong>Crie um novo projeto React</strong>
                            </p>
                            <p>
                              Utilize um dos seguintes comandos para criar seu
                              projeto:
                            </p>
                            <pre className="mb-2 overflow-x-auto rounded-md bg-gray-800 p-3 text-white">
                              # Usando Create React App npx create-react-app
                              todo-app # OU usando Vite npm create vite@latest
                              todo-app -- --template react
                            </pre>
                          </li>

                          <li>
                            <p>
                              <strong>
                                Navegue até a pasta do projeto e instale as
                                dependências
                              </strong>
                            </p>
                            <pre className="mb-2 overflow-x-auto rounded-md bg-gray-800 p-3 text-white">
                              cd todo-app npm install
                            </pre>
                          </li>

                          <li>
                            <p>
                              <strong>
                                Limpe os arquivos iniciais do template
                              </strong>
                            </p>
                            <p>
                              Remova o conteúdo desnecessário do template
                              inicial, deixando apenas a estrutura básica:
                            </p>
                            <ul className="list-disc pl-5">
                              <li>Limpe o conteúdo do App.js/App.jsx</li>
                              <li>Remova estilos não utilizados</li>
                              <li>Mantenha apenas os arquivos necessários</li>
                            </ul>
                          </li>

                          <li>
                            <p>
                              <strong>Crie a estrutura de pastas básica</strong>
                            </p>
                            <p>
                              Organize seu projeto com a seguinte estrutura
                              recomendada:
                            </p>
                            <pre className="mb-2 overflow-x-auto rounded-md bg-gray-800 p-3 text-white">
                              src/ ├── components/ │ ├── TodoForm.jsx #
                              Formulário para adicionar/editar tarefas │ ├──
                              TodoList.jsx # Lista de tarefas │ ├── TodoItem.jsx
                              # Item individual da tarefa │ └── TodoFilter.jsx #
                              Filtros para as tarefas ├── App.jsx # Componente
                              principal ├── index.js # Ponto de entrada └──
                              styles/ # Pasta para estilos (opcional)
                            </pre>
                          </li>

                          <li>
                            <p>
                              <strong>
                                Configure o componente principal App.jsx
                              </strong>
                            </p>
                            <p>
                              Crie uma versão inicial do seu componente App que
                              será a base do seu projeto:
                            </p>
                            <pre className="mb-2 overflow-x-auto rounded-md bg-gray-800 p-3 text-white">
                              {`import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        {/* Seus componentes serão adicionados aqui */}
      </main>
    </div>
  );
}

export default App;`}
                            </pre>
                          </li>

                          <li>
                            <p>
                              <strong>
                                Inicie o servidor de desenvolvimento
                              </strong>
                            </p>
                            <pre className="mb-2 overflow-x-auto rounded-md bg-gray-800 p-3 text-white">
                              npm start # Para Create React App # OU npm run dev
                              # Para Vite
                            </pre>
                            <p>
                              Verifique se o projeto está funcionando acessando{' '}
                              <code>http://localhost:3000</code> (ou a porta
                              indicada no terminal).
                            </p>
                          </li>
                        </ol>

                        <div className="my-4 border-l-4 border-green-500 bg-green-50 p-4">
                          <h4 className="text-base font-semibold text-gray-800">
                            Verificação da Etapa
                          </h4>
                          <p className="text-gray-600">
                            Antes de avançar, certifique-se de que:
                          </p>
                          <ul className="list-disc pl-5 text-gray-600">
                            <li>
                              Seu projeto React está configurado corretamente
                            </li>
                            <li>A estrutura básica de pastas foi criada</li>
                            <li>
                              O App.jsx foi configurado como componente inicial
                            </li>
                            <li>
                              O servidor de desenvolvimento está funcionando
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between">
                        <button className="flex cursor-not-allowed items-center font-medium text-purple-900 opacity-50">
                          <svg
                            className="mr-1 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Etapa anterior
                        </button>

                        <button className="flex items-center font-medium text-purple-900">
                          Próxima etapa
                          <svg
                            className="ml-1 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Etapa 2 */}
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
                  <button
                    className="flex w-full items-center justify-between bg-gray-50 p-4 text-left"
                    onClick={() => toggleAccordion(1)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                        <span className="font-bold text-purple-900">2</span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        Gerenciamento de Estado e Modelos de Dados
                      </span>
                    </div>
                    <svg
                      className={`h-5 w-5 transform text-gray-500 ${openAccordion === 1 ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {openAccordion === 1 && (
                    <div className="border-t border-gray-200 p-4">
                      <div className="prose max-w-none text-gray-600">
                        <h4 className="mb-2 text-base font-semibold">
                          O que você vai fazer:
                        </h4>
                        <ul className="mb-4 list-disc pl-5">
                          <li>Definir a estrutura de dados para as tarefas</li>
                          <li>Configurar os estados principais no App.jsx</li>
                          <li>Implementar funções de manipulação de tarefas</li>
                          <li>Criar a persistência com localStorage</li>
                        </ul>

                        <h4 className="mb-2 text-base font-semibold">
                          Instruções detalhadas:
                        </h4>

                        <ol className="list-decimal space-y-3 pl-5">
                          <li>
                            <p>
                              <strong>
                                Defina a estrutura de dados para as tarefas
                              </strong>
                            </p>
                            <p>Utilize o formato sugerido para cada tarefa:</p>
                            <pre className="mb-2 overflow-x-auto rounded-md bg-gray-800 p-3 text-white">
                              {`{
  id: number,         // Identificador único
  title: string,      // Título da tarefa
  description: string, // Descrição (opcional)
  completed: boolean, // Status de conclusão
  createdAt: string   // Data de criação (formato ISO)
}`}
                            </pre>
                          </li>

                          <li>
                            <p>
                              <strong>
                                Configure os estados no componente App
                              </strong>
                            </p>
                            <p>
                              Atualize seu App.jsx para incluir os principais
                              estados:
                            </p>
                            <pre className="mb-2 overflow-x-auto rounded-md bg-gray-800 p-3 text-white">
                              {`import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState([]);
  
  // Estado para armazenar o filtro atual
  const [filter, setFilter] = useState('all'); // 'all', 'active', 'completed'
  
  // Estado para controlar a edição de tarefas
  const [editingTask, setEditingTask] = useState(null);

  // Restante do componente...
  
  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <main>
        {/* Aqui serão adicionados os componentes filhos */}
      </main>
    </div>
  );
}

export default App;`}
                            </pre>
                          </li>

                          <li>
                            <p>
                              <strong>
                                Implemente as funções para manipulação das
                                tarefas
                              </strong>
                            </p>
                            <p>
                              Adicione as seguintes funções ao componente App:
                            </p>
                            <pre className="mb-2 overflow-x-auto rounded-md bg-gray-800 p-3 text-white">
                              {`// Adicionar uma nova tarefa
const addTask = (title, description = '') => {
  const newTask = {
    id: Date.now(),
    title,
    description,
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  setTasks([...tasks, newTask]);
};

// Marcar uma tarefa como concluída/não concluída
const toggleTaskStatus = (taskId) => {
  setTasks(tasks.map(task => 
    task.id === taskId 
      ? { ...task, completed: !task.completed } 
      : task
  ));
};

// Editar uma tarefa existente
const updateTask = (taskId, updatedData) => {
  setTasks(tasks.map(task => 
    task.id === taskId 
      ? { ...task, ...updatedData } 
      : task
  ));
  setEditingTask(null);
};

// Excluir uma tarefa
const deleteTask = (taskId) => {
  setTasks(tasks.filter(task => task.id !== taskId));
};

// Filtrar tarefas com base no status atual
const filteredTasks = () => {
  switch(filter) {
    case 'active':
      return tasks.filter(task => !task.completed);
    case 'completed':
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};`}
                            </pre>
                          </li>

                          <li>
                            <p>
                              <strong>
                                Implemente a persistência de dados com
                                localStorage
                              </strong>
                            </p>
                            <p>
                              Adicione useEffect para carregar e salvar as
                              tarefas:
                            </p>
                            <pre className="mb-2 overflow-x-auto rounded-md bg-gray-800 p-3 text-white">
                              {`// Carregar tarefas do localStorage ao iniciar
useEffect(() => {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    setTasks(JSON.parse(savedTasks));
  }
}, []);

// Salvar tarefas no localStorage sempre que forem alteradas
useEffect(() => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}, [tasks]);`}
                            </pre>
                          </li>
                        </ol>

                        <div className="my-4 border-l-4 border-green-500 bg-green-50 p-4">
                          <h4 className="text-base font-semibold text-gray-800">
                            Verificação da Etapa
                          </h4>
                          <p className="text-gray-600">
                            Antes de avançar, certifique-se de que:
                          </p>
                          <ul className="list-disc pl-5 text-gray-600">
                            <li>
                              A estrutura de dados para as tarefas está definida
                            </li>
                            <li>
                              Os estados principais estão configurados no
                              App.jsx
                            </li>
                            <li>
                              As funções de manipulação de tarefas estão
                              implementadas
                            </li>
                            <li>
                              A persistência com localStorage está funcionando
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 flex justify-between">
                        <button className="flex items-center font-medium text-purple-900">
                          <svg
                            className="mr-1 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Etapa anterior
                        </button>

                        <button className="flex items-center font-medium text-purple-900">
                          Próxima etapa
                          <svg
                            className="ml-1 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Etapa 3 */}
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
                  <button
                    className="flex w-full items-center justify-between bg-gray-50 p-4 text-left"
                    onClick={() => toggleAccordion(2)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                        <span className="font-bold text-purple-900">3</span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        Criação de Componentes
                      </span>
                    </div>
                    <svg
                      className={`h-5 w-5 transform text-gray-500 ${openAccordion === 2 ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {openAccordion === 2 && (
                    <div className="border-t border-gray-200 p-4">
                      <p className="mb-4 text-gray-600">
                        Nesta etapa, você criará os componentes principais do
                        aplicativo e os integrará.
                      </p>

                      {/* Detalhes da etapa 3 - Componentes */}
                      <div className="prose max-w-none text-gray-600">
                        <h4 className="mb-2 text-base font-semibold">
                          O que você vai fazer:
                        </h4>
                        <ul className="mb-4 list-disc pl-5">
                          <li>
                            Criar o componente TodoForm para adicionar/editar
                            tarefas
                          </li>
                          <li>
                            Criar o componente TodoItem para exibir tarefas
                            individuais
                          </li>
                          <li>
                            Criar o componente TodoList para renderizar a lista
                            de tarefas
                          </li>
                          <li>
                            Criar o componente TodoFilter para filtrar as
                            tarefas
                          </li>
                          <li>Integrar todos os componentes no App.jsx</li>
                        </ul>

                        <p>
                          Detalhes e código para cada componente serão
                          fornecidos aqui...
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Mais etapas */}
                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
                  <button
                    className="flex w-full items-center justify-between bg-gray-50 p-4 text-left"
                    onClick={() => toggleAccordion(3)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                        <span className="font-bold text-purple-900">4</span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        Estilização e Responsividade
                      </span>
                    </div>
                    <svg
                      className={`h-5 w-5 transform text-gray-500 ${openAccordion === 3 ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {openAccordion === 3 && (
                    <div className="border-t border-gray-200 p-4">
                      <p className="text-gray-600">
                        Detalhes sobre estilização e responsividade do
                        aplicativo...
                      </p>
                    </div>
                  )}
                </div>

                <div className="mb-6 overflow-hidden rounded-lg border border-gray-200">
                  <button
                    className="flex w-full items-center justify-between bg-gray-50 p-4 text-left"
                    onClick={() => toggleAccordion(4)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                        <span className="font-bold text-purple-900">5</span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        Testes e Depuração
                      </span>
                    </div>
                    <svg
                      className={`h-5 w-5 transform text-gray-500 ${openAccordion === 4 ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {openAccordion === 4 && (
                    <div className="border-t border-gray-200 p-4">
                      <p className="text-gray-600">
                        Detalhes sobre como testar e depurar seu aplicativo...
                      </p>
                    </div>
                  )}
                </div>

                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <button
                    className="flex w-full items-center justify-between bg-gray-50 p-4 text-left"
                    onClick={() => toggleAccordion(5)}
                  >
                    <div className="flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                        <span className="font-bold text-purple-900">6</span>
                      </div>
                      <span className="font-semibold text-gray-800">
                        Finalização e Entrega
                      </span>
                    </div>
                    <svg
                      className={`h-5 w-5 transform text-gray-500 ${openAccordion === 5 ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {openAccordion === 5 && (
                    <div className="border-t border-gray-200 p-4">
                      <p className="text-gray-600">
                        Detalhes sobre como finalizar e entregar seu projeto...
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'submission' && (
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-gray-800">
                  Entrega do Projeto
                </h2>

                <p className="mb-6 text-gray-600">
                  Siga as instruções abaixo para entregar seu projeto Todo App e
                  receber feedback da comunidade e mentores.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-gray-800">
                      Preparação para Entrega
                    </h3>
                    <div className="mb-4 border-l-4 border-purple-900 bg-purple-50 p-4">
                      <h4 className="mb-2 font-semibold">
                        Checklist antes da entrega:
                      </h4>
                      <ul className="list-disc space-y-1 pl-5 text-gray-600">
                        <li>Toda a funcionalidade básica está implementada</li>
                        <li>O código está organizado em componentes</li>
                        <li>
                          Os dados são corretamente persistidos com localStorage
                        </li>
                        <li>
                          A interface é responsiva e testada em diferentes
                          dispositivos
                        </li>
                        <li>
                          README está completo com instruções de instalação e
                          uso
                        </li>
                        <li>Não há erros no console</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-gray-800">
                      Requisitos da Entrega
                    </h3>
                    <p className="mb-3 text-gray-600">
                      Para este desafio, você precisa enviar:
                    </p>
                    <ol className="mb-4 list-decimal space-y-2 pl-5 text-gray-600">
                      <li>
                        <strong>Código Fonte:</strong> Todo o código do seu
                        projeto em um repositório Git (GitHub, GitLab, etc.)
                      </li>
                      <li>
                        <strong>README:</strong> Documento explicando como
                        instalar, executar e usar seu aplicativo
                      </li>
                      <li>
                        <strong>Demo ao vivo:</strong> Um link para uma versão
                        hospedada do seu aplicativo (GitHub Pages, Netlify,
                        Vercel, etc.)
                      </li>
                      <li>
                        <strong>Capturas de tela:</strong> Pelo menos 3 imagens
                        mostrando diferentes aspectos do seu aplicativo
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-gray-800">
                      Como Hospedar Seu Aplicativo
                    </h3>
                    <p className="mb-3 text-gray-600">
                      Você pode facilmente hospedar seu aplicativo React usando
                      um dos seguintes serviços gratuitos:
                    </p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                      <div className="rounded-lg border border-gray-200 p-4">
                        <h4 className="mb-2 font-semibold">GitHub Pages</h4>
                        <p className="mb-3 text-sm text-gray-600">
                          Hospedagem gratuita para projetos de código aberto.
                        </p>
                        <a
                          href="#"
                          className="text-sm font-medium text-purple-900 hover:underline"
                        >
                          Ver instruções
                        </a>
                      </div>
                      <div className="rounded-lg border border-gray-200 p-4">
                        <h4 className="mb-2 font-semibold">Netlify</h4>
                        <p className="mb-3 text-sm text-gray-600">
                          Deploy simples e rápido com integração contínua.
                        </p>
                        <a
                          href="#"
                          className="text-sm font-medium text-purple-900 hover:underline"
                        >
                          Ver instruções
                        </a>
                      </div>
                      <div className="rounded-lg border border-gray-200 p-4">
                        <h4 className="mb-2 font-semibold">Vercel</h4>
                        <p className="mb-3 text-sm text-gray-600">
                          Plataforma otimizada para aplicações React.
                        </p>
                        <a
                          href="#"
                          className="text-sm font-medium text-purple-900 hover:underline"
                        >
                          Ver instruções
                        </a>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-gray-800">
                      Formulário de Envio
                    </h3>
                    <div className="rounded-lg border border-gray-200 bg-white p-6">
                      <div className="space-y-4">
                        <div>
                          <label className="mb-1 block text-sm font-semibold text-gray-700">
                            Link do Repositório*
                          </label>
                          <input
                            type="text"
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            placeholder="https://github.com/seu-username/todo-app"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-sm font-semibold text-gray-700">
                            Link da Demo ao Vivo*
                          </label>
                          <input
                            type="text"
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            placeholder="https://seu-app-demo.netlify.app"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-sm font-semibold text-gray-700">
                            Comentários (opcional)
                          </label>
                          <textarea
                            className="w-full rounded border border-gray-300 px-3 py-2 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            rows="3"
                            placeholder="Compartilhe qualquer desafio que encontrou, recursos adicionais implementados ou feedback sobre o desafio"
                          ></textarea>
                        </div>
                        <div>
                          <label className="mb-1 block text-sm font-semibold text-gray-700">
                            Capturas de Tela (carregar pelo menos 3)*
                          </label>
                          <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
                            <button className="rounded-lg bg-purple-100 px-4 py-2 font-medium text-purple-900 hover:bg-purple-200">
                              Escolher Arquivos
                            </button>
                            <p className="mt-2 text-sm text-gray-500">
                              Arraste e solte arquivos ou clique para selecionar
                            </p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <button className="w-full rounded-md bg-purple-900 px-6 py-3 font-semibold text-white hover:bg-purple-800">
                            Enviar Projeto
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-lg font-semibold text-gray-800">
                      O Que Acontece Depois?
                    </h3>
                    <p className="mb-4 text-gray-600">
                      Após a submissão do seu projeto, você pode esperar:
                    </p>
                    <ul className="list-disc space-y-2 pl-5 text-gray-600">
                      <li>
                        Feedback detalhado da comunidade e mentores dentro de 7
                        dias
                      </li>
                      <li>Sugestões de melhoria para seu código e interface</li>
                      <li>Pontuação e XP para seu perfil após avaliação</li>
                      <li>
                        Seu projeto poderá ser destacado na galeria da
                        comunidade se for excepcional
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'discussion' && (
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-xl font-bold text-gray-800">
                  Discussão
                </h2>

                <div className="mb-6 flex items-center justify-between">
                  <p className="text-gray-600">
                    Compartilhe dúvidas, dicas ou soluções com a comunidade.
                  </p>
                  <button className="rounded-md bg-purple-900 px-4 py-2 text-sm font-medium text-white">
                    Nova Pergunta
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Comentário 1 */}
                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                          <span className="font-bold text-purple-900">AM</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800">
                            Ana Martins
                          </h4>
                          <span className="text-sm text-gray-500">
                            2 dias atrás
                          </span>
                        </div>
                        <p className="mb-3 text-gray-700">
                          Estou com problemas para implementar a funcionalidade
                          de edição. Quando clico para editar uma tarefa, o
                          formulário não é preenchido com os dados existentes.
                          Alguém pode ajudar?
                        </p>
                        <div className="flex items-center space-x-4 text-sm">
                          <button className="flex items-center text-gray-500 hover:text-purple-900">
                            <svg
                              className="mr-1 h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                            </svg>
                            14
                          </button>
                          <button className="text-gray-500 hover:text-purple-900">
                            Responder
                          </button>
                        </div>

                        {/* Resposta ao comentário */}
                        <div className="mt-4 border-t border-gray-100 pt-4 pl-4">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                                <span className="text-sm font-bold text-green-800">
                                  JS
                                </span>
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="mb-1 flex items-center justify-between">
                                <h4 className="font-semibold text-gray-800">
                                  João Silva{' '}
                                  <span className="ml-2 rounded bg-purple-100 px-2 py-1 text-xs text-purple-900">
                                    Mentor
                                  </span>
                                </h4>
                                <span className="text-sm text-gray-500">
                                  1 dia atrás
                                </span>
                              </div>
                              <p className="mb-2 text-gray-700">
                                Olá Ana! Isso geralmente acontece quando o
                                estado de edição não está sendo corretamente
                                atualizado. Verifique se você está passando o
                                objeto completo da tarefa para o estado
                                editingTask e não apenas o ID. Aqui está um
                                exemplo:
                              </p>
                              <pre className="mb-2 overflow-x-auto rounded-md bg-gray-800 p-3 text-xs text-white">
                                {`// Ao clicar no botão editar
const handleEdit = (task) => {
  setEditingTask(task); // Passe o objeto completo, não apenas task.id
};`}
                              </pre>
                              <div className="flex items-center space-x-4 text-sm">
                                <button className="flex items-center text-gray-500 hover:text-purple-900">
                                  <svg
                                    className="mr-1 h-4 w-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                                  </svg>
                                  8
                                </button>
                                <button className="text-gray-500 hover:text-purple-900">
                                  Responder
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comentário 2 */}
                  <div className="rounded-lg border border-gray-200 p-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                          <span className="font-bold text-blue-900">PL</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-1 flex items-center justify-between">
                          <h4 className="font-semibold text-gray-800">
                            Pedro Lima
                          </h4>
                          <span className="text-sm text-gray-500">
                            5 dias atrás
                          </span>
                        </div>
                        <p className="mb-3 text-gray-700">
                          Dica para quem está implementando o localStorage:
                          lembre-se de envolver o código em um try/catch para
                          lidar com possíveis erros. Alguns navegadores em modo
                          privado podem bloquear o acesso ao localStorage.
                        </p>
                        <pre className="mb-3 overflow-x-auto rounded-md bg-gray-800 p-3 text-xs text-white">
                          {`// Salvar no localStorage com tratamento de erro
const saveToLocalStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    // Implementar fallback se necessário
  }
};`}
                        </pre>
                        <div className="flex items-center space-x-4 text-sm">
                          <button className="flex items-center text-gray-500 hover:text-purple-900">
                            <svg
                              className="mr-1 h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path>
                            </svg>
                            23
                          </button>
                          <button className="text-gray-500 hover:text-purple-900">
                            Responder
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button className="w-full rounded-lg border border-gray-300 p-3 font-medium text-gray-700 hover:bg-gray-50">
                      Carregar mais comentários
                    </button>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="mb-4 text-lg font-semibold text-gray-800">
                      Deixe seu comentário
                    </h3>
                    <textarea
                      className="w-full rounded-lg border border-gray-300 p-3 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none"
                      rows="4"
                      placeholder="Compartilhe suas dúvidas ou sugestões com a comunidade..."
                    ></textarea>
                    <div className="mt-3 flex justify-end">
                      <button className="rounded-md bg-purple-900 px-4 py-2 font-medium text-white">
                        Publicar Comentário
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
