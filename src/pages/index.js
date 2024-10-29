import * as React from "react";
import { useState, useEffect } from "react";
import S0 from '../components/scene0.js';
import S1 from '../components/scene1.js';
import S2 from '../components/scene2.js';
import S3 from '../components/scene3.js';
import S4 from '../components/scene4.js';
import S5 from '../components/scene5.js';
import S6 from '../components/scene6.js';
import S7 from '../components/scene7.js';
import S8 from '../components/scene8.js';
import S9 from '../components/scene9.js';
import S10 from '../components/scene10.js';
import Grain from '../components/grain';
import Background from '../components/background';
import Loading from '../components/loading';
import Footer from '../components/footer'
import Slider from '../components/slider'
import Seo from '../components/seo'
import CustomCursor from '../components/cursor';


const scenes = [S0, S1, S2, S3, S4, S5, S6, S7, S8, S9, S10];


const IndexPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currentScene, setCurrentScene] = useState(0);
    const [showSlider, setShowSlider] = useState(false); // State to control the visibility of the Slider


    
        // Set the initial scene based on the URL hash
        useEffect(() => {
            const hash = window.location.hash;
            if (hash.startsWith('#Heuristic_')) {
                const sceneNumber = parseInt(hash.replace('#Heuristic_', ''), 10);
                if (!isNaN(sceneNumber) && sceneNumber >= 0 && sceneNumber < scenes.length) {
                    setCurrentScene(sceneNumber);
                }
            }
        }, []);

        
    useEffect(() => {
        const handleLoad = () => {
            setIsLoading(false);
        };

        // Simulate loading time for demonstration purposes
        const timeout = setTimeout(handleLoad, 3000);

        // Clean up the timeout if the component unmounts
        return () => clearTimeout(timeout);
    }, []);


    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                changeScene(currentScene - 1);
            } else if (event.key === 'ArrowRight') {
                changeScene(currentScene + 1);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentScene]);

    useEffect(() => {
        // Update the URL hash when the current scene changes
        if (currentScene > 0) {
            window.location.hash = `#Heuristic_${currentScene}`;
        } else {
            window.history.replaceState(null, '', window.location.pathname);
        }
    }, [currentScene]);
    
    const changeScene = (newScene) => {
        if (newScene < 0 || newScene >= scenes.length) return;
        
        setShowSlider(true);
        setTimeout(() => {
            setCurrentScene(newScene);
            setShowSlider(false);
        }, 700);
    };

    const renderScene = () => {
        const SceneComponent = scenes[currentScene];
        return (
            <>
                <SceneComponent changeScene={changeScene} />
                {showSlider && <Slider />}
            </>
        );
    };


    return (
        <main className="bg-zinc-900 w-full h-screen font-red-hat">
            <CustomCursor />
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {/*<CurrentSceneComponent className="w-full h-screen"  handleNext={handleNext} />*/}
                    
                    {renderScene()}
                    {/* <NoiseEffect /> */}
                    <Background />
                    <Grain />
                    <Footer setCurrentScene={changeScene} currentScene={currentScene} totalScenes={scenes.length} />
                </>
            )}
        </main>
    );
};

export default IndexPage;

export const Head = () => (
    <Seo 
      title='10 Usability Heuristics'
      description='With decades of mastery in crafting intuitive experiences, Jakob Nielsen reveals his elusive secrets—guiding you to create products so user-friendly, they feel almost enchanted.'
      />
  )