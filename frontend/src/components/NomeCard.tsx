import { useState, useEffect, useRef } from "react";
import { Pencil, Trash2, Check, X } from "lucide-react";

import type { Nome } from "../types/Nome";


interface NomeCardProps {

	nome: Nome;

	onDelete: (id: number) => void;

	onUpdate: (
		id: number,
		nome: string
	) => void;

}


function NomeCard({
	nome,
	onDelete,
	onUpdate

}: NomeCardProps) {


	const [editando, setEditando] = useState(false);

	const [novoNome, setNovoNome] = useState(nome.nome);


	const campoRef = useRef<HTMLDivElement>(null);



	useEffect(() => {

		function clicarFora(event: MouseEvent) {

			if (
				campoRef.current &&
				!campoRef.current.contains(event.target as Node)
			) {

				setNovoNome(nome.nome);

				setEditando(false);

			}

		}


		if (editando) {

			document.addEventListener(
				"mousedown",
				clicarFora
			);

		}


		return () => {

			document.removeEventListener(
				"mousedown",
				clicarFora
			);

		};


	}, [editando, nome.nome]);




	function salvarEdicao() {

		if (!novoNome.trim()) return;


		onUpdate(
			nome.id,
			novoNome
		);


		setEditando(false);

	}





	function cancelarEdicao() {

		setNovoNome(nome.nome);

		setEditando(false);

	}





	function pressionarTecla(
		event: React.KeyboardEvent<HTMLInputElement>
	) {

		if (event.key === "Enter") {

			salvarEdicao();

		}


		if (event.key === "Escape") {

			cancelarEdicao();

		}

	}





	return (

		<div
			ref={campoRef}
			className="
				bg-[#f1f1f3]
				border
				border-[#d2d4dc]
				rounded-xl
				p-4
				flex
				justify-between
				items-center
				shadow-sm
				hover:shadow-md
				transition
			"
		>


			{editando ? (

				<div className="
					flex
					items-center
					gap-2
					w-full
					animate-in
					fade-in
					duration-300
				">


					<input

						autoFocus

						value={novoNome}

						onChange={(e) =>
							setNovoNome(e.target.value)
						}

						onKeyDown={pressionarTecla}


						className="
							flex-1
							bg-[#f8f8fa]
							border
							border-[#c0c2ce]
							rounded-lg
							px-3
							py-2
							outline-none
							focus:ring-2
							focus:ring-[#c0c2ce]
						"

					/>



					<button
						onClick={salvarEdicao}
						className="
							p-2
							rounded-lg
							hover:bg-[#c0c2ce]
							transition
						"
					>

						<Check size={18}/>

					</button>



					<button
						onClick={cancelarEdicao}
						className="
							p-2
							rounded-lg
							hover:bg-[#c0c2ce]
							transition
						"
					>

						<X size={18}/>

					</button>


				</div>



			) : (


				<>


					<div>

						<span className="
							font-semibold
							text-[#2f3035]
						">

							{nome.nome}

						</span>


						<p className="
							text-sm
							text-[#afafaf]
						">

							#{nome.id}

						</p>


					</div>




					<div className="
						flex
						gap-2
					">


						<button
							onClick={() =>
								setEditando(true)
							}

							className="
								p-2
								rounded-lg
								hover:bg-[#d2d4dc]
								transition
							"
						>

							<Pencil size={18}/>

						</button>



						<button

							onClick={() =>
								onDelete(nome.id)
							}

							className="
								p-2
								rounded-lg
								hover:bg-[#d2d4dc]
								transition
							"

						>

							<Trash2 size={18}/>

						</button>


					</div>


				</>


			)}


		</div>

	);

}


export default NomeCard;