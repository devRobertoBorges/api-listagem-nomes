import { useState } from "react";
import { ArrowLeft } from "lucide-react";

import type { Nome } from "../types/Nome";

import {
	buscarNomes,
	deletarNome,
	atualizarNome
} from "../services/nomes-services";

import NomeCard from "../components/NomeCard";
import Button from "../components/Button";


function Home() {

	const [nomes, setNomes] = useState<Nome[]>([]);
	const [mostrarLista, setMostrarLista] = useState(false);
	const [nomeParaExcluir, setNomeParaExcluir] = useState<number | null>(null);
	const [mensagem, setMensagem] = useState(false);



	async function carregarNomes() {

		const dados = await buscarNomes();

		setNomes(dados);

		setMostrarLista(true);

	}



	function voltar() {

		setMostrarLista(false);

		setNomeParaExcluir(null);

	}



	function confirmarExclusao(id: number) {

		setNomeParaExcluir(id);

	}



	async function removerNome(id: number) {

		await deletarNome(id);


		setNomes((nomesAtuais) =>
			nomesAtuais.filter(
				(nome) => nome.id !== id
			)
		);


		setNomeParaExcluir(null);

	}



	async function editarNome(
		id: number,
		nome: string
	) {

		await atualizarNome(
			id,
			nome
		);


		setNomes((nomesAtuais) =>
			nomesAtuais.map((item) =>
				item.id === id
					?
					{
						...item,
						nome
					}
					:
					item
			)
		);



		setMensagem(true);


		setTimeout(() => {

			setMensagem(false);

		}, 2500);


	}




	return (

		<main
			className="
				min-h-screen
				bg-[#f8f8fa]
				flex
				items-center
				justify-center
				p-6
				relative
			"
		>


			{mensagem && (

            <div
                className="
                    fixed
                    top-6
                    right-6
                    bg-[#f8f8fa]
                    border
                    border-[#d2d4dc]
                    rounded-xl
                    px-5
                    py-4
                    shadow-lg
                    text-[#2f3035]
                    font-semibold
                    confirmacao-entrada
                    z-50
                "
            >

					✓ Alterado com sucesso

				</div>

			)}






			<section
				className="
					bg-white
					w-full
					max-w-md
					rounded-2xl
					shadow-lg
					p-8
				"
			>


				{mostrarLista && (

					<div className="mb-6">

						<button
							onClick={voltar}
							className="
								flex
								items-center
								gap-2
								text-[#2f3035]
								font-semibold
								hover:text-[#afafaf]
								transition
							"
						>

							<ArrowLeft size={20}/>

							Voltar

						</button>


					</div>

				)}





				<h1
					className="
						text-3xl
						font-bold
						text-center
						text-[#2f3035]
						mb-6
					"
				>

					Gerenciamento de Nomes

				</h1>






				{!mostrarLista && (

					<div
						className="
							flex
							justify-center
							mb-6
						"
					>

						<Button onClick={carregarNomes}>

							Acessar lista

						</Button>


					</div>

				)}







				{mostrarLista && (

					<div className="space-y-3">


						{nomes.map((nome) => (

							<div key={nome.id}>


								<NomeCard
									nome={nome}
									onDelete={confirmarExclusao}
									onUpdate={editarNome}
								/>




								{nomeParaExcluir === nome.id && (

									<div
										className="
											mt-3
											bg-[#e5e6eb]
											border
											border-[#d2d4dc]
											rounded-xl
											p-4
											shadow-md
											confirmacao-entrada
										"
									>


										<p
											className="
												text-center
												font-semibold
												text-[#2f3035]
												mb-3
											"
										>

											Excluir {nome.nome}?

										</p>



										<div
											className="
												flex
												justify-center
												gap-3
											"
										>


											<button
												onClick={() =>
													setNomeParaExcluir(null)
												}
												className="
													bg-[#c0c2ce]
													px-4
													py-2
													rounded-lg
													transition-all
													hover:scale-105
												"
											>

												Cancelar

											</button>




											<button
												onClick={() =>
													removerNome(nome.id)
												}
												className="
													bg-red-500
													text-white
													px-4
													py-2
													rounded-lg
													transition-all
													hover:scale-105
												"
											>

												Excluir

											</button>


										</div>


									</div>

								)}


							</div>


						))}



					</div>

				)}




			</section>


		</main>

	);

}


export default Home;