import BeeSvg from './svg/BeeSvg';
import { wScale } from '../../style/Dimensions';
import CrabSvg from './svg/CrabSvg';
import OctopusSvg from './svg/OctopusSvg';
import WhaleSvg from './svg/WhaleSvg';
import React from 'react';

/**
 * FreeTimeAnimation
 * Created by leduong on 22/11/2020
 */

const listAnimal = [
  {
    color: 'rgba(9, 45, 176,0.6)',
    Icon: <BeeSvg size={wScale(200)}/>,
    title: 'Bees are flying insects closely related to wasps and ants, known for their role in pollination and',
    descriptions: 'Bees are a monophyletic lineage within the superfamily Apoidea. They are presently considered a clade, called Anthophila. There are over 16,000 known species of bees in seven recognized biological families.[1][2] Some species – including honey bees, bumblebees, and stingless bees – live socially in colonies while some species – including mason bees, carpenter bees, leafcutter bees, and sweat bees – are solitary.',
  },
  {
    color: 'rgba(18, 136, 138,0.6)',
    Icon: <CrabSvg size={wScale(200)}/>,
    title: 'Crabs are decapod crustaceans of the infraorder Brachyura, which typically have a very short projecting "tail" (abdomen) ',
    descriptions: 'Crabs are generally covered with a thick exoskeleton, composed primarily of highly mineralized chitin,[4][5] and armed with a single pair of chelae (claws). Crabs are found in all of the world\'s oceans, while many crabs live in fresh water and on land, particularly in tropical regions. Crabs vary in size from the pea crab, a few millimeters wide, to the Japanese spider crab, with a leg span up to 4 m (13 ft)',
  },
  {
    color: 'rgba(105, 55, 5,0.6)',
    Icon: <WhaleSvg size={wScale(200)}/>,
    title: 'Whales are a widely distributed and diverse group of fully aquatic placental marine mammals',
    descriptions: 'Whales, dolphins and porpoises belong to the order Cetartiodactyla, which consists of even-toed ungulates. Their closest living relatives are the hippopotamuses, having diverged about 40 million years ago. The two parvorders of whales, baleen whales (Mysticeti) and toothed whales (Odontoceti), are thought to have split apart around 34 million years ago.',
  },
  {
    color: 'rgba(16, 140, 189,0.6)',
    Icon: <OctopusSvg size={wScale(200)}/>,
    title: 'The octopus (plural octopuses) is a soft-bodied, eight-limbed mollusc of the order Octopoda (/ɒkˈtɒpədə/, ok-TO-pə-də).',
    descriptions: 'Like other cephalopods, the octopus is bilaterally symmetric with two eyes and a beak, with its mouth at the center point of the eight limbs.[a] The soft body can rapidly alter its shape, enabling octopuses to squeeze through small gaps. They trail their eight appendages behind them as they swim. The siphon is used both for respiration and for locomotion, by expelling a jet of water.',
  },
];

export default {
  listAnimal,
};
