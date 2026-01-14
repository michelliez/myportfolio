import React from 'react';
import Study from '../assets/Study.JPG';
import Moses from '../assets/Moses.jpg';
import TooLate from '../assets/Too Late.jpeg';
import TheNewNormal from '../assets/The New Normal.jpg';
import AmIThereYet from '../assets/Am I There Yet.jpg';
import LemonsAndTea from '../assets/Lemons and Tea.jpg';


function ArtworkCard({ title, description, image }) {
  return (
    <div className="card artwork-card">
      <div className="artwork-image-container">
        <img src={image} alt={title} className="artwork-image" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default function CreativePage() {
 const artworks = [
    {
      title: 'Study: 16 x 20 in.',
      description: 'This oil painting was referenced from a Baroque style painting to improve my oil painting technique.',
      image: Study // Replace with your image path
    },
    {
      title: 'Moses: 12 x 16 in.',
      description: 'This graphite piece is a still-life sketch from a plaster model of Moses that took 10 hours to complete.',
      image: Moses // Replace with your image path
    },
    {
      title: 'Too Late: 16 x 20 in.',
      description: 'Rising global temperatures and sea levels increase the grave possibility of whole cities being sunken underwater. This acrylic painting brings attention to climate change. If pollution contiues, hope for our planet will be lost. At this point, it’s too late.',
      image: TooLate // Replace with your image path
    },
    {
      title: 'The New Normal: 20 x 16 in.',
      description: 'This acrylic painting depicts school violence, which has become increasingly common in the United States. The weapon is the only item in color, emphasizing how it holds the fate of the child’s future.',
      image: TheNewNormal // Replace with your image path
    },
    {
      title: 'Am I There Yet?: 18 x 14 in.',
      description: 'This oil painting expresses the exhaustion everyone feels when working towards a goal. It’s the goal everyone has that pushes them to keep going despite the obstacles, failed solutions, and crumpled papers',
      image: AmIThereYet // Replace with your image path
    },
    {
      title: 'Lemons and Tea: 14 x 11 in.',
      description: 'In this still-life oil painting, I improved my color theory skills by painting the table’s reflection and the green and orange colors of the lemons.',
      image: LemonsAndTea // Replace with your image path
    }
    
  ];

  return (
    <section id="creative" className="section">
      <h2 className="section-title">Creative Work</h2>
       <p className="section-text">
          The music you're hearing is Zigeunerweisen, Op. 20, by Pablo de Sarasate, performed by me on the violin! </p>
      <div className="grid">
        {artworks.map((artwork, index) => (
          <ArtworkCard key={index} {...artwork} />
        ))}
      </div>
    </section>
  );
}
