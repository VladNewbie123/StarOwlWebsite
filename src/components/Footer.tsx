const Footer : React.FC = () => {
    return (
        <footer className="py-10 text-center text-gray-400 bg-[#0d1a2d]/90 shadow-inner mt-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Блок 1: Имя и профессия */}
                <div>
                    <h2 className="text-xl font-bold">StarOwl</h2>
                    <p className="mt-2 text-gray-400">3D Artist & Developer</p>
                </div>

                {/* Блок 2: Контакты */}
                <div>
                    <h3 className="font-semibold mb-2">Contact</h3>
                    <p className="text-gray-400">Email: <a href="mailto:starowl.3d@gmail.com" className="hover:underline">starowl.3d@gmail.com</a></p>
                </div>

                {/* Блок 3: Соцсети / Портфолио */}
                <div>
                    <h3 className="font-semibold mb-2">Follow Me</h3>
                    <ul className="text-gray-400 space-y-1">
                        <li><a href="https://www.artstation.com/starowl3d6" target="_blank" rel="noopener noreferrer" className="hover:underline">ArtStation</a></li>
                        <li><a href="https://www.cgtrader.com/designers/starowl3d" target="_blank" rel="noopener noreferrer" className="hover:underline">CGTrader</a></li>
                        <li><a href="https://booknet.ua/starowl-u11418111" target="_blank" rel="noopener noreferrer" className="hover:underline">Booknet</a></li>
                    </ul>
                </div>

            </div>

            {/* Нижняя строка с авторскими правами */}
            <div className="mt-8 text-center text-gray-500 text-sm">
                © 2025 StarOwl. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;