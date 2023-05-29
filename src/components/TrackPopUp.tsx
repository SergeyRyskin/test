import React from "react";

const TrackPopUp = ()  => {
    return ( 
        <main>
            <section>
                <article>
                    <article>
                        <header>
                        <div className="container mx-auto py-4 px-6 flex items-center justify-between">
                            <h1 className="text-xl font-semibold">Diktatorial Suite</h1> //Will be changed to Diktatorial_Logo
                            <nav>
                            <ul className="flex space-x-4">
                                <li>
                                <a href="#" className="hover:text-gray-400">Prompt to Mastering</a>
                                </li>
                                <li>
                                <a href="#" className="hover:text-gray-400">Settings</a>
                                </li>
                            </ul>
                            </nav>
                        </div>
                        </header>
                        <article className="flex justify-center items-center py-10 px-4">
                            <article className="p-8 sm:p-10">
                                <h1 className="text-2xl font-bold tracking-tight text-greyText flex justify-center items-center">Upload track</h1>
                             <p className="mt-6 text-base leading-7 text-greyText flex justify-center items-center">Drag an drop a .wav file to start mastering</p>
                            </article>
                        </article>
                    </article>
                </article>
            </section>
        </main>
    );
};