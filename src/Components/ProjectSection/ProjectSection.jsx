import React from "react";

import './ProjectSection.css'
import ProjectCard from "../../elements/ProjectCard/ProjectCard";

import lrcImage2 from '../../assets/lrc_get_portrait.png'
import port2 from '../../assets/this_portrait.png'
import i5 from '../../assets/i5.avif'

export default function ProjectSection() {
    return(
        <div id="project-section">
            <div id="project-head">Projects</div>
            <div className="project-container">
                <ProjectCard
                    project_title={'LRC Get'}
                    project_link={'https://lrc-get.vercel.app/'}
                    git_link={'https://github.com/Alien501/lrc-get-public'}
                    project_desc={'This website provides a convenient platform to retrieve both synchronized and non-synchronized lyrics for songs from diverse sources.'}
                    project_image={[lrcImage2]}
                />

                <ProjectCard
                    project_title={'Portfolio'}
                    project_link={'https://portfolio-git-main-alien501.vercel.app/'}
                    git_link={'https://github.com/Alien501/portfolio'}
                    project_desc={'My personal portfolio website, The one currently you are in :-).'}
                    project_image={[port2]}
                />

                <ProjectCard
                    project_title={'I5 Academy'}
                    project_link={'https://i5-academy.vercel.app/'}
                    git_link={''}
                    project_desc={'A simple and minimalistic blog site made for a client.'}
                    project_image={[i5]}
                />
            </div>
        </div>
    )
}