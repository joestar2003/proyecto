"use client";
import { useCart } from "../components/CartContext";
import { useEffect, useState } from "react";

const figuras = [
	{
		nombre: "Alucard",
		imagen: "/img/alucard.png",
		descripcion: "Luchador - Asesino",
		precio: 300000, // Legendario
		precioOriginal: 350000,
		stock: 15,
		categoria: "Legendario",
		estrellas: 5,
		etiqueta: "-14%",
	},
	{
		nombre: "Gusion",
		imagen: "/img/gusion.png",
		descripcion: "Asesino",
		precio: 420000, // Mítico
		precioOriginal: null,
		stock: 5,
		categoria: "Mítico",
		estrellas: 5,
		etiqueta: null,
	},
	{
		nombre: "Fanny",
		imagen: "/img/fanny.png",
		descripcion: "Asesino",
		precio: 300000, // Legendario
		precioOriginal: 350000,
		stock: 12,
		categoria: "Legendario",
		estrellas: 5,
		etiqueta: "-14%",
	},
	{
		nombre: "Lancelot",
		imagen: "/img/lancelot.png",
		descripcion: "Asesino",
		precio: 210000, // Épico
		precioOriginal: 240000,
		stock: 10,
		categoria: "Épico",
		estrellas: 4,
		etiqueta: "-13%",
	},
];

function formatCOP(value: number) {
	// Mostrar como 250.000 (sin decimales, con punto de miles)
	return "$ " + value.toLocaleString("es-CO", { maximumFractionDigits: 0 });
}

export default function Figuras() {
	const { addToCart } = useCart();
	const [search, setSearch] = useState("");

	// Sincronizar búsqueda global desde localStorage
	useEffect(() => {
		const handler = () => setSearch(localStorage.getItem("search-figura") || "");
		window.addEventListener("storage", handler);
		setSearch(localStorage.getItem("search-figura") || "");
		return () => window.removeEventListener("storage", handler);
	}, []);

	// Filtrar figuras
	const figurasFiltradas = figuras.filter((f) =>
		f.nombre.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div
			style={{
				minHeight: "100vh",
				width: "100vw",
				background: "#10121a",
				padding: "0",
				margin: "0",
				boxSizing: "border-box",
				overflowX: "hidden",
			}}
		>
			<div className="container py-5">
				<h1
					className="mb-2 text-center"
					style={{
						fontFamily: "Orbitron, sans-serif",
						fontSize: "2.5rem",
						color: "#ffe082",
					}}
				>
					Catálogo Completo
				</h1>
				<p className="text-center mb-4" style={{ color: "#ffe082" }}>
					{figurasFiltradas.length} figuras disponibles
				</p>
				<div className="row">
					{figurasFiltradas.map((figura, idx) => (
						<div className="col-md-4 mb-4" key={idx}>
							<div
								className="card h-100 shadow-lg"
								style={{
									background: "#181a20",
									borderRadius: "18px",
									border: "1.5px solid #23243a",
									color: "#fff",
									boxShadow: "0 4px 24px 0 #0008",
									transition: "transform 0.18s",
								}}
							>
								<div
									style={{
										position: "relative",
										width: "100%",
										height: "260px",
										background: "#23243a",
										borderRadius: "18px 18px 0 0",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										overflow: "hidden",
										borderBottom: "1.5px solid #23243a",
									}}
								>
									<img
										src={figura.imagen}
										alt={figura.nombre}
										style={{
											width: "90%",
											height: "90%",
											objectFit: "contain",
											borderRadius: "18px 18px 0 0",
											background: "transparent",
											boxShadow: "0 2px 12px 0 #0006",
											transition: "transform 0.18s",
										}}
									/>
									{figura.etiqueta && (
										<span
											style={{
												position: "absolute",
												top: 12,
												left: 12,
												background: "#ff5252",
												color: "#fff",
												padding: "4px 10px",
												borderRadius: "8px",
												fontWeight: "bold",
												fontSize: "1rem",
												boxShadow: "0 2px 8px 0 #0005",
											}}
										>
											{figura.etiqueta}
										</span>
									)}
									<span
										style={{
											position: "absolute",
											top: 12,
											right: 12,
											background: "#8f5cff",
											color: "#fff",
											padding: "4px 10px",
											borderRadius: "8px",
											fontWeight: "bold",
											fontSize: "1rem",
											boxShadow: "0 2px 8px 0 #0005",
										}}
									>
										{figura.categoria}
									</span>
								</div>
								<div className="card-body d-flex flex-column">
									<h5
										className="card-title"
										style={{
											fontFamily: "Orbitron, sans-serif",
											fontSize: "1.3rem",
										}}
									>
										{figura.nombre}
									</h5>
									<div className="mb-1" style={{ color: "#ffe082" }}>
										{"★".repeat(figura.estrellas)}
									</div>
									<p className="card-text mb-1" style={{ color: "#bdbdbd" }}>
										{figura.descripcion}
									</p>
									<div className="mb-2">
										<span
											className="fw-bold"
											style={{
												fontSize: "1.5rem",
												color: "#ffe082",
											}}
										>
											{formatCOP(figura.precio)}
										</span>
										{figura.precioOriginal && (
											<span
												className="text-muted ms-2"
												style={{
													textDecoration: "line-through",
													fontSize: "1.1rem",
												}}
											>
												{formatCOP(figura.precioOriginal)}
											</span>
										)}
									</div>
									<div
										className="mb-2"
										style={{ color: "#bdbdbd", fontSize: "0.95rem" }}
									>
										Stock: {figura.stock} unidades
									</div>
									<button
										className="btn btn-warning mt-auto fw-bold"
										style={{ borderRadius: "10px" }}
										onClick={() =>
											addToCart({
												nombre: figura.nombre,
												imagen: figura.imagen,
												precio: figura.precio,
											})
										}
									>
										<i className="bi bi-cart me-2"></i>Añadir al carrito
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<style>{`
        .card:hover {
          transform: translateY(-8px) scale(1.025);
          box-shadow: 0 8px 32px 0 #000b;
        }
        .card:hover img {
          transform: scale(1.04);
        }
      `}</style>
		</div>
	);
}