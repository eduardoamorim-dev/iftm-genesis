import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar Layout */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar - Visível apenas em telas médias e grandes */}
        <div className="fixed hidden h-screen flex-col bg-slate-800 text-white md:flex md:w-64">
          <div className="border-b border-slate-700 p-4">
            <span className="text-xl font-bold text-teal-400">
              IFTM Genesis
            </span>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center rounded bg-slate-700 p-2 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  Aprender
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center rounded p-2 text-slate-300 hover:bg-slate-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Desafios
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center rounded p-2 text-slate-300 hover:bg-slate-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  Comunidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center rounded p-2 text-slate-300 hover:bg-slate-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Tutoriais
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center rounded p-2 text-slate-300 hover:bg-slate-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Ajuda
                </a>
              </li>
            </ul>
            <div className="mt-8 border-t border-slate-700 pt-4">
              <h3 className="text-sm font-medium tracking-wider text-slate-400 uppercase">
                Trilhas de Aprendizado
              </h3>
              <ul className="mt-2 space-y-1">
                <li className="flex items-center px-2 py-1 text-sm text-slate-300">
                  <span className="mr-2 h-2 w-2 rounded-full bg-teal-400"></span>
                  Front-end Completo
                </li>
                <li className="flex items-center px-2 py-1 text-sm text-slate-300">
                  <span className="mr-2 h-2 w-2 rounded-full bg-orange-400"></span>
                  Back-end com Node.js
                </li>
                <li className="flex items-center px-2 py-1 text-sm text-slate-300">
                  <span className="mr-2 h-2 w-2 rounded-full bg-indigo-400"></span>
                  Full Stack JavaScript
                </li>
              </ul>
            </div>
          </nav>
          <div className="border-t border-slate-700 p-4">
            <button className="w-full rounded bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700">
              Acessar Conta
            </button>
          </div>
        </div>

        {/* Top Navigation - Visível apenas em telas pequenas */}
        <div className="bg-white shadow-sm md:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <span className="text-xl font-bold text-teal-600">
              IFTM Genesis
            </span>
            <button className="text-slate-800 hover:text-teal-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="flex-1 md:ml-64">
          {/* Hero Section */}
          <div className="bg-teal-600 text-white">
            <div className="mx-auto max-w-4xl px-4 py-16">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="mb-8 flex-1 md:mb-0 md:pr-10">
                  <h1 className="mb-4 text-3xl font-bold md:text-4xl">
                    Aprenda programação com desafios práticos
                  </h1>
                  <p className="mb-6 text-lg text-teal-100">
                    Desenvolva suas habilidades resolvendo problemas reais e
                    construa um portfólio impressionante para sua carreira.
                  </p>
                  <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button className="rounded bg-white px-6 py-3 font-medium text-teal-800 shadow-md hover:bg-teal-50">
                      Comece Agora
                    </button>
                    <button className="rounded bg-orange-500 px-6 py-3 font-medium text-white hover:bg-orange-600">
                      Explorar Desafios
                    </button>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="rounded-lg bg-white p-6 shadow-md">
                    <h2 className="mb-4 text-lg font-bold text-teal-800">
                      Acesse sua conta
                    </h2>
                    <form>
                      <div className="mb-4">
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                          Email
                        </label>
                        <input
                          type="email"
                          className="w-full rounded border border-slate-300 px-3 py-2 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="mb-1 block text-sm font-medium text-slate-700">
                          Senha
                        </label>
                        <input
                          type="password"
                          className="w-full rounded border border-slate-300 px-3 py-2 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:outline-none"
                          placeholder="Sua senha"
                        />
                      </div>
                      <button className="w-full rounded bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700">
                        Entrar
                      </button>
                      <div className="mt-4 text-center text-sm text-slate-700">
                        <a href="#" className="text-teal-600 hover:underline">
                          Esqueceu a senha?
                        </a>
                        <span className="mx-2">•</span>
                        <a href="#" className="text-teal-600 hover:underline">
                          Criar conta
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trilhas de Aprendizado em Destaque */}
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="mb-6 text-2xl font-bold text-slate-800">
              Trilhas de Aprendizado
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="h-2 bg-teal-600"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-800">
                    Front-end Completo
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">
                    Domine HTML, CSS, JavaScript e frameworks modernos como
                    React para criar interfaces incríveis.
                  </p>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-500">12 módulos</span>
                    <span className="text-sm text-slate-500">20 projetos</span>
                  </div>
                  <div className="mb-4 h-2 w-full rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-teal-600"
                      style={{ width: '25%' }}
                    ></div>
                  </div>
                  <button className="w-full rounded bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700">
                    Iniciar Trilha
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="h-2 bg-orange-500"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-800">
                    Back-end com Node.js
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">
                    Aprenda a construir APIs robustas, conectar com bancos de
                    dados e implementar autenticação.
                  </p>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-500">8 módulos</span>
                    <span className="text-sm text-slate-500">15 projetos</span>
                  </div>
                  <div className="mb-4 h-2 w-full rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-orange-500"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <button className="w-full rounded bg-orange-500 px-4 py-2 font-medium text-white hover:bg-orange-600">
                    Iniciar Trilha
                  </button>
                </div>
              </div>

              <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="h-2 bg-indigo-500"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-slate-800">
                    Full Stack JavaScript
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">
                    Combine conhecimentos de front-end e back-end para criar
                    aplicações web completas.
                  </p>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm text-slate-500">15 módulos</span>
                    <span className="text-sm text-slate-500">25 projetos</span>
                  </div>
                  <div className="mb-4 h-2 w-full rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-indigo-500"
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                  <button className="w-full rounded bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-600">
                    Iniciar Trilha
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desafios da Semana */}
          <div className="bg-slate-100 py-12">
            <div className="mx-auto max-w-6xl px-4">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">
                  Desafios da Semana
                </h2>
                <a
                  href="#"
                  className="font-medium text-teal-600 hover:underline"
                >
                  Ver todos
                </a>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Challenge Card 1 */}
                <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="border-b border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-green-100 px-2 py-1 text-xs text-green-800">
                        Iniciante
                      </span>
                      <span className="text-sm text-slate-500">3-5 horas</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-bold text-slate-800">
                      Landing Page para E-commerce
                    </h3>
                    <p className="mb-4 text-sm text-slate-600">
                      Desenvolva uma landing page para uma loja online com HTML,
                      CSS e um pouco de JavaScript.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 h-5 w-5 text-amber-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm text-slate-600">350 XP</span>
                      </div>
                      <button className="rounded bg-teal-600 px-3 py-1 text-sm font-medium text-white hover:bg-teal-700">
                        Ver Desafio
                      </button>
                    </div>
                  </div>
                </div>

                {/* Challenge Card 2 */}
                <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="border-b border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-amber-100 px-2 py-1 text-xs text-amber-800">
                        Intermediário
                      </span>
                      <span className="text-sm text-slate-500">8-10 horas</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-bold text-slate-800">
                      App de Previsão do Tempo
                    </h3>
                    <p className="mb-4 text-sm text-slate-600">
                      Crie um aplicativo que consome uma API de clima e exibe
                      previsões atualizadas.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 h-5 w-5 text-amber-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm text-slate-600">650 XP</span>
                      </div>
                      <button className="rounded bg-teal-600 px-3 py-1 text-sm font-medium text-white hover:bg-teal-700">
                        Ver Desafio
                      </button>
                    </div>
                  </div>
                </div>

                {/* Challenge Card 3 */}
                <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                  <div className="border-b border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-800">
                        Avançado
                      </span>
                      <span className="text-sm text-slate-500">
                        15-20 horas
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-lg font-bold text-slate-800">
                      Clone do Spotify
                    </h3>
                    <p className="mb-4 text-sm text-slate-600">
                      Desenvolva um clone do Spotify com React, gerenciamento de
                      estado e API de música.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-1 h-5 w-5 text-amber-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm text-slate-600">1200 XP</span>
                      </div>
                      <button className="rounded bg-teal-600 px-3 py-1 text-sm font-medium text-white hover:bg-teal-700">
                        Ver Desafio
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alunos em Destaque */}
          <div className="mx-auto max-w-6xl px-4 py-12">
            <h2 className="mb-6 text-2xl font-bold text-slate-800">
              Alunos em Destaque
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Aluno Card 1 */}
              <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="p-6 text-center">
                  <div className="mb-4 inline-block h-24 w-24 overflow-hidden rounded-full bg-slate-200">
                    <div className="flex h-full w-full items-center justify-center bg-slate-300 text-slate-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Lucas Mendes
                  </h3>
                  <p className="mb-3 text-sm text-slate-500">
                    Senior Web Developer @ Meta
                  </p>
                  <div className="mb-4 flex flex-wrap justify-center gap-1">
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      React
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      TypeScript
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      AWS
                    </span>
                  </div>
                  <button className="w-full rounded bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700">
                    Ver Perfil
                  </button>
                </div>
              </div>

              {/* Outros cards de Alunos seriam similares */}
              {/* Aluno Card 2 */}
              <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="p-6 text-center">
                  <div className="mb-4 inline-block h-24 w-24 overflow-hidden rounded-full bg-slate-200">
                    <div className="flex h-full w-full items-center justify-center bg-slate-300 text-slate-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Juliana Costa
                  </h3>
                  <p className="mb-3 text-sm text-slate-500">
                    Frontend Engineer @ Google
                  </p>
                  <div className="mb-4 flex flex-wrap justify-center gap-1">
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      Angular
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      UX/UI
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      CSS
                    </span>
                  </div>
                  <button className="w-full rounded bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700">
                    Ver Perfil
                  </button>
                </div>
              </div>

              {/* Aluno Card 3 */}
              <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="p-6 text-center">
                  <div className="mb-4 inline-block h-24 w-24 overflow-hidden rounded-full bg-slate-200">
                    <div className="flex h-full w-full items-center justify-center bg-slate-300 text-slate-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Pedro Santos
                  </h3>
                  <p className="mb-3 text-sm text-slate-500">
                    Back-end Developer @ Netflix
                  </p>
                  <div className="mb-4 flex flex-wrap justify-center gap-1">
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      Node.js
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      Express
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      MongoDB
                    </span>
                  </div>
                  <button className="w-full rounded bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700">
                    Ver Perfil
                  </button>
                </div>
              </div>

              {/* Aluno Card 4 */}
              <div className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <div className="p-6 text-center">
                  <div className="mb-4 inline-block h-24 w-24 overflow-hidden rounded-full bg-slate-200">
                    <div className="flex h-full w-full items-center justify-center bg-slate-300 text-slate-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    Ana Oliveira
                  </h3>
                  <p className="mb-3 text-sm text-slate-500">
                    CTO @ Tech Startup
                  </p>
                  <div className="mb-4 flex flex-wrap justify-center gap-1">
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      Python
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      React
                    </span>
                    <span className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-800">
                      DevOps
                    </span>
                  </div>
                  <button className="w-full rounded bg-teal-600 px-4 py-2 font-medium text-white hover:bg-teal-700">
                    Ver Perfil
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Call-To-Action */}
          <div className="bg-slate-800 py-12 text-white">
            <div className="mx-auto max-w-4xl px-4 text-center">
              <h2 className="mb-4 text-3xl font-bold">
                Pronto para evoluir suas habilidades?
              </h2>
              <p className="mb-8 text-slate-300">
                Junte-se a milhares de desenvolvedores que estão aprimorando
                suas habilidades através de desafios práticos e Alunoia
                especializada.
              </p>
              <div className="flex flex-col justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button className="rounded bg-teal-600 px-8 py-3 font-medium text-white hover:bg-teal-700">
                  Criar Conta Gratuita
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="bg-slate-900 py-10 text-slate-400">
            <div className="mx-auto max-w-6xl px-4">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                <div>
                  <span className="text-xl font-bold text-teal-400">
                    IFTM Genesis
                  </span>
                  <p className="mt-2 text-sm">
                    Plataforma de aprendizado prático para desenvolvedores que
                    buscam evoluir através de desafios reais.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-white">Plataforma</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-sm hover:text-white">
                        Desafios
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm hover:text-white">
                        Trilhas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm hover:text-white">
                        Alunos
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm hover:text-white">
                        Comunidade
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-white">Recursos</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-sm hover:text-white">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm hover:text-white">
                        Tutoriais
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm hover:text-white">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-sm hover:text-white">
                        Suporte
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-white">Contato</h3>
                  <ul className="space-y-2">
                    <li className="text-sm">contato@IFTM Genesis.com</li>
                    <li className="text-sm">+55 (34) 3456-7890</li>
                    <li className="mt-4 flex space-x-3">
                      <a href="#" className="text-slate-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                        </svg>
                      </a>
                      <a href="#" className="text-slate-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a href="#" className="text-slate-400 hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm">
                <p>&copy; 2025 IFTM Genesis. Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
