/**
 * FreeTimeAnimation
 * Created by leduong on 30/11/2020
 */

import Assets from './Assets';

const DummyDataDateALive = [
  {
    key: 'Kotori Itsuka',
    source: Assets.image.animeDateALive.dateALive1,
    color: 'rgba(213,111,110,0.5)',
    decs: `~ Kotori Itsuka, when a mission is started.
Kotori Itsuka | Heroes Wiki | FANDOM powered by Wikia
http://hero.fandom.com › wiki › Kotori_Itsuka
Movies and TV shows: Date A Live The Movie: Mayuri Judgement, Date A Live`,
  },
  {
    key: 'Tohka Yatogami',
    source: Assets.image.animeDateALive.dateALive2,
    color: 'rgba(180,161,186,0.5)',
    decs:
      'Tohka Yatogami ( 夜 や 刀 と 神 がみ 十 とお 香 か , Yatogami Tōka?) is one of the main female characters of the Date A Live series and the first Spirit saved by Shido. There is also another personality named Tenka ( 天 てん 香 か , Tenka?) residing inside her, which only emerges when she assumes her Inverse Form.',
  },
  {
    key: 'Yoshino',
    source: Assets.image.animeDateALive.dateALive3,
    color: 'rgba(132,129,175,0.5)',
    decs:
      'Yoshino has the look of a young, cute girl at about 13 to 14 years of age with blue eyes and long curly blue hair. She wears a short white dress under a large green raincoat that has a tail with a pink ribbon attached to it, with a pair of rabbit-ear hood and holds her rabbit puppet, Yoshinon, in her left hand.',
  },
  {
    key: 'Tobiichi Origami',
    source: Assets.image.animeDateALive.dateALive4,
    color: 'rgba(104,120,161,0.5)',
    decs:
      'Origami Tobiichi is one of the main characters from the Date A Live franchise. She is a member of the AST (Anti-Spirit Team) who holds a grudge against spirits, due to the deaths of her parents at the hands of a spirit. She is later revealed to be a spirit herself, and the one who killed her own parents, as she learns.',
  },
  {
    key: 'Kotori Itsuka',
    source: Assets.image.animeDateALive.dateALive5,
    color: 'rgba(233,145,138,0.5)',
    decs: `~ Kotori Itsuka, when a mission is started.
Kotori Itsuka | Heroes Wiki | FANDOM powered by Wikia
http://hero.fandom.com › wiki › Kotori_Itsuka
Movies and TV shows: Date A Live The Movie: Mayuri Judgement, Date A Live`,
  },
  {
    key: 'Yoshino',
    source: Assets.image.animeDateALive.dateALive6,
    color: 'rgba(108,137,204,0.5)',
    decs:
      'Yoshino has the look of a young, cute girl at about 13 to 14 years of age with blue eyes and long curly blue hair. She wears a short white dress under a large green raincoat that has a tail with a pink ribbon attached to it, with a pair of rabbit-ear hood and holds her rabbit puppet, Yoshinon, in her left hand.',
  },
  {
    key: 'Kurumi Tokisaki',
    source: Assets.image.animeDateALive.dateALive7,
    color: 'rgba(165,108,104,0.5)',
    decs:
      'Kurumi Tokisaki is a major antagonist-turned-anti-heroine in the light novel and anime series Date A Live.',
  },
  {
    key: 'Yoshino',
    source: Assets.image.animeDateALive.dateALive8,
    color: 'rgba(124,141,200,0.5)',
    decs:
      'Yoshino has the look of a young, cute girl at about 13 to 14 years of age with blue eyes and long curly blue hair. She wears a short white dress under a large green raincoat that has a tail with a pink ribbon attached to it, with a pair of rabbit-ear hood and holds her rabbit puppet, Yoshinon, in her left hand.',
  },
  {
    key: 'Tobiichi Origami',
    source: Assets.image.animeDateALive.dateALive9,
    color: 'rgba(141,145,167,0.5)',
    decs:
      'Origami Tobiichi is one of the main characters from the Date A Live franchise. She is a member of the AST (Anti-Spirit Team) who holds a grudge against ',
  },
  {
    key: 'Tokisaki Kurumi',
    source: Assets.image.animeDateALive.dateALive10,
    color: 'rgba(119,88,96,0.5)',
    decs:
      'Kurumi Tokisaki is a major antagonist-turned-anti-heroine in the light novel and anime series Date A Live.',
  },
  {
    key: 'Tohka Yatogami',
    source: Assets.image.animeDateALive.dateALive11,
    color: 'rgba(146,124,160,0.5)',
    decs:
      'Yatogami Tōka?) is one of the main female characters of the Date A Live series and the first Spirit saved by Shido.',
  },
  {
    key: 'Yoshino',
    source: Assets.image.animeDateALive.dateALive12,
    color: 'rgba(173,197,189,0.5)',
    decs:
      'Yatogami Tōka?) is one of the main female characters of the Date A Live series and the first Spirit saved by Shido.',
  },
  {
    key: 'Origami Tobiichi',
    source: Assets.image.animeDateALive.dateALive13,
    color: 'rgba(166,165,156,0.5)',
    decs:
      'Origami Tobiichi is one of the main characters from the Date A Live franchise. She is a member of the AST (Anti-Spirit Team) who holds a grudge against ',
  },
  {
    key: 'Tohka Yatogami',
    source: Assets.image.animeDateALive.dateALive14,
    color: 'rgba(130,82,149,0.5)',
    decs:
      'Yatogami Tōka?) is one of the main female characters of the Date A Live series and the first Spirit saved by Shido.',
  },
  {
    key: 'Tohka Yatogami',
    source: Assets.image.animeDateALive.dateALive15,
    color: 'rgba(174,150,188,0.5)',
    decs:
      'Yatogami Tōka?) is one of the main female characters of the Date A Live series and the first Spirit saved by Shido.',
  },
  {
    key: 'Origami Tobiichi',
    source: Assets.image.animeDateALive.dateALive16,
    color: 'rgba(169,173,179,0.5)',
    decs:
      'Origami Tobiichi is one of the main characters from the Date A Live franchise. She is a member of the AST (Anti-Spirit Team) who holds a grudge against ',
  },
];

const DummyCardImage = [
  {
    key: 'Kurobane Yusa',
    source: Assets.image.cardImage.cardImage24,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Megurine Luka',
    source: Assets.image.cardImage.cardImage2,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Otosaka Yuu',
    source: Assets.image.cardImage.cardImage3,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Miku Nakano',
    source: Assets.image.cardImage.cardImage4,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Meiko Honma',
    source: Assets.image.cardImage.cardImage1,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Flandre Scarlet',
    source: Assets.image.cardImage.cardImage5,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Hanamaru Kunikida',
    source: Assets.image.cardImage.cardImage6,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Mizore Shirayuki',
    source: Assets.image.cardImage.cardImage7,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Hiriki',
    source: Assets.image.cardImage.cardImage8,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Chiyo Sakura',
    source: Assets.image.cardImage.cardImage9,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Lala Satalin Deviluke',
    source: Assets.image.cardImage.cardImage10,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Tamako Kitashirakawa',
    source: Assets.image.cardImage.cardImage11,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Rikka Takanashi',
    source: Assets.image.cardImage.cardImage12,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'kirigiri Kyoko',
    source: Assets.image.cardImage.cardImage13,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Kafuu Chino',
    source: Assets.image.cardImage.cardImage14,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Hifumi Takimoto',
    source: Assets.image.cardImage.cardImage15,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Sora',
    source: Assets.image.cardImage.cardImage16,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Houtarou Oreki',
    source: Assets.image.cardImage.cardImage17,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Umaru Doma',
    source: Assets.image.cardImage.cardImage18,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Cocoa Hoto',
    source: Assets.image.cardImage.cardImage19,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Tachibana Kanade',
    source: Assets.image.cardImage.cardImage21,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Mayu',
    source: Assets.image.cardImage.cardImage22,
    color: 'rgba(169,173,179,0.5)',
  },
  {
    key: 'Neptune',
    source: Assets.image.cardImage.cardImage23,
    color: 'rgba(169,173,179,0.5)',
  },
];

export {DummyDataDateALive, DummyCardImage};
