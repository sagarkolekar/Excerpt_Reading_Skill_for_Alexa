/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * There's a small tweak for performance improvement rest code same as the earlier skills
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.6d49f170-db5b-457c-a120-7d893e0e7428';

//quotes for alexa and basic skill information
const languageStrings = {    
    'en-US': {
        translation: {
            FACTS: [
                'Atticus said to Jem one day, I would rather you shot at tin cans in the backyard, but I know you will go after birds. Shoot all the blue jays you want, if you can hit them, but remember it is a sin to kill a mockingbird. That was the only time I ever heard Atticus say it was a sin to do something, and I asked Miss Maudie about it. Your father is right she said. Mockingbirds do not do one thing except make music for us to enjoy. They do not eat up peoples gardens, do not nest in corn cribs, they do not do one thing but sing their hearts out for us. That is why it is a sin to kill a mockingbird. - from To Kill a Mockingbird by Harper Lee.',
                'We believe that we can change the things around us in accordance with our desires—we believe it because otherwise we can see no favourable outcome. We do not think of the outcome which generally comes to pass and is also favourable: we do not succeed in changing things in accordance with our desires, but gradually our desires change. The situation that we hoped to change because it was intolerable becomes unimportant to us. We have failed to surmount the obstacle, as we were absolutely determined to do, but life has taken us round it, led us beyond it, and then if we turn round to gaze into the distance of the past, we can barely see it, so imperceptible has it become. –  from In Search of Lost Time by Marcel Proust.',
                'Hello babies. Welcome to Earth. It’s hot in the summer and cold in the winter. It’s round and wet and crowded. On the outside, babies, you’ve got a hundred years here. There’s only one rule that I know of, babies-“God damn it, you’ve got to be kind.” – from God Bless You, Mr. Rosewater by Kurt Vonnegut',
                'I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain.” –  From Dune by Frank Herbert.',
                'Just remember that the things you put into your head are there forever, he said. You might want to think about that. You forget some things, dont you? Yes. You forget what you want to remember and you remember what you want to forget. –  from The Road by Cormac McCarthy.',
                'You can tell yourself that you would be willing to lose everything you have in order to get something you want. But it’s a catch-22: all of those things you’re willing to lose are what make you recognizable. Lose them, and you’ve lost yourself.” – from Handle With Care by Jodi Picoult.',
                'The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars.” –  from On The Road by by Jack Kerouac.',
                'He allowed himself to be swayed by his conviction that human beings are not born once and for all on the day their mothers give birth to them, but that life obliges them over and over again to give birth to themselves. - from Love in the Time of Cholera by Gabriel Garci a Marquez.',
                'There is an idea of a Patrick Bateman, some kind of abstraction, but there is no real me, only an entity, something illusory, and though I can hide my cold gaze and you can shake my hand and feel flesh gripping yours and maybe you can even sense our lifestyles are probably comparable: I simply am not there.” – from American Psycho by Bret Easton Ellis.',
                'Sometimes fate is like a small sandstorm that keeps changing directions. You change direction but the sandstorm chases you. You turn again, but the storm adjusts. Over and over you play this out, like some ominous dance with death just before dawn. Why? Because this storm isn’t something that blew in from far away, something that has nothing to do with you. This storm is you. Something inside of you. So all you can do is give in to it, step right inside the storm, closing your eyes and plugging up your ears so the sand doesn’t get in, and walk through it, step by step. There’s no sun there, no moon, no direction, no sense of time. Just fine white sand swirling up into the sky like pulverized bones. That’s the kind of sandstorm you need to imagine. And you really will have to make it through that violent, metaphysical, symbolic storm. No matter how metaphysical or symbolic it might be, make no mistake about it: it will cut through flesh like a thousand razor blades. People will bleed there, and you will bleed too. Hot, red blood. You’ll catch that blood in your hands, your own blood and the blood of others. And once the storm is over you won’t remember how you made it through, how you managed to survive. You won’t even be sure, in fact, whether the storm is really over. But one thing is certain. When you come out of the storm you won’t be the same person who walked in. That’s what this storm’s all about.” – from Kafka On The Shore by Haruki Murakami.',
                'A heart is not judged by how much you love; but by how much you are loved by others” –from The Wonderful Wizard of Oz by L. Frank Baum.',
                'The most important things are the hardest to say. They are the things you get ashamed of, because words diminish them — words shrink things that seemed limitless when they were in your head to no more than living size when they’re brought out. But it’s more than that, isn’t it? The most important things lie too close to wherever your secret heart is buried, like landmarks to a treasure your enemies would love to steal away. And you may make revelations that cost you dearly only to have people look at you in a funny way, not understanding what you’ve said at all, or why you thought it was so important that you almost cried while you were saying it. That’s the worst, I think. When the secret stays locked within not for want of a teller but for want of an understanding ear.- from by Stephen King, Different Seasons by Stephen King.',
                'I don’t have any problem understanding why people flunk out of college or quit their jobs or cheat on each other or break the law or spray-paint walls. A little bit outside of things is where some people feel each other. We do it to replace the frame of family. We do it to erase and remake our origins in their own images. To say, I too was here.” – from The Chronology of Water by Lidia Yuknavitch.', 
                'I never believed in Santa Claus. None of us kids did. Mom and Dad refused to let us. They couldn’t afford expensive presents and they didn’t want us to think we weren’t as good as other kids who, on Christmas morning, found all sorts of fancy toys under the tree that were supposedly left by Santa Claus. Dad had lost his job at the gypsum, and when Christmas came that year, we had no money at all. On Christmas Eve, Dad took each one of us kids out into the desert night one by one. “Pick out your favorite star”, Dad said. “I like that one!” I said. Dad grinned, “that’s Venus”, he said. He explained to me that planets glowed because reflected light was constant and stars twinkled because their light pulsed. “I like it anyway” I said. “What the hell,” Dad said. “It’s Christmas. You can have a planet if you want.” And he gave me Venus. Venus didn’t have any moons or satellites or even a magnetic field, but it did have an atmosphere sort of similar to Earth’s, except it was super hot-about 500 degrees or more. “So,” Dad said, “when the sun starts to burn out and Earth turns cold, everyone might want to move to Venus to get warm. And they’ll have to get permission from your descendants first. We laughed about all the kids who believed in the Santa myth and got nothing for Christmas but a bunch of cheap plastic toys. “Years from now, when all the junk they got is broken and long forgotten,” Dad said, “you’ll still have your stars.” – from The Glass Castle by Jeannette Walls',
                'Lolita, light of my life, fire of my loins. My sin, my soul. Lo-lee-ta: the tip of the tongue taking a trip of three steps down the palate to tap, at three, on the teeth. Lo. Lee. Ta. She was Lo, plain Lo, in the morning, standing four feet ten in one sock. She was Lola in slacks. She was Dolly at school. She was Dolores on the dotted line. But in my arms she was always Lolita. Did she have a precursor? She did, indeed she did. In point of fact, there might have been no Lolita at all had I not loved, one summer, an initial girl-child. In a princedom by the sea. Oh when? About as many years before Lolita was born as my age was that summer. You can always count on a murderer for a fancy prose style. Ladies and gentlemen of the jury, exhibit number one is what the seraphs, the misinformed, simple, noble-winged seraphs, envied. Look at this tangle of thorns. - from Lolita by Vladimir Nabokov.',
                'You think because he doesn’t love you that you are worthless. You think that because he doesn’t want you anymore that he is right — that his judgement and opinion of you are correct. If he throws you out, then you are garbage. You think he belongs to you because you want to belong to him. Don’t. It’s a bad word, ‘belong.’ Especially when you put it with somebody you love. Love shouldn’t be like that. Did you ever see the way the clouds love a mountain? They circle all around it; sometimes you can’t even see the mountain for the clouds. But you know what? You go up top and what do you see? His head. The clouds never cover the head. His head pokes through, beacuse the clouds let him; they don’t wrap him up. They let him keep his head up high, free, with nothing to hide him or bind him. You can’t own a human being. You can’t lose what you don’t own. Suppose you did own him. Could you really love somebody who was absolutely nobody without you? You really want somebody like that? Somebody who falls apart when you walk out the door? You don’t, do you? And neither does he. You’re turning over your whole life to him. Your whole life, girl. And if it means so little to you that you can just give it away, hand it to him, then why should it mean any more to him? He can’t value you more than you value yourself. – from Song of Solomon by Toni Morrison.',
                'I think we are well-advised to keep on nodding terms with the people we used to be, whether we find them attractive company or not. Otherwise they turn up unannounced and surprise us, come hammering on the mind’s door at 4 a.m. of a bad night and demand to know who deserted them, who betrayed them, who is going to make amends. We forget all too soon the things we thought we could never forget. We forget the loves and the betrayals alike, forget what we whispered and what we screamed, forget who we were.” ― from by Joan Didion, Slouching Towards Bethlehem.',
                'I do not let anyone touch me,” I finally said. Why not?” Why not? Because I was tired of men. Hanging in doorways, standing too close, their smell of beer or fifteen-year-old whiskey. Men who didn’t come to the emergency room with you, men who left on Christmas Eve. Men who slammed the security gates, who made you love them then changed their minds. Forests of boys, their ragged shrubs full of eyes following you, grabbing your breasts, waving their money, eyes already knocking you down, taking what they felt was theirs. (…) It was a play and I knew how it ended, I didn’t want to audition for any of the roles. It was no game, no casual thrill. It was three-bullet Russian roulette. – from White Oleander by Janet Fitch.',
                'I wanted so badly to lie down next to her on the couch, to wrap my arms around her and sleep. Not fuck, like in those movies. Not even have sex. Just sleep together in the most innocent sense of the phrase. But I lacked the courage and she had a boyfriend and I was gawky and she was gorgeous and I was hopelessly boring and she was endlessly fascinating. So I walked back to my room and collapsed on the bottom bunk, thinking that if people were rain, I was drizzle and she was hurricane. ― from Looking for Alaska by John Green.',
                'If you’re going to try, go all the way. Otherwise, don’t even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery–isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you’ll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you’re going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It’s the only good fight there is. ―from Factotum by  Charles Bukowski.',
                'I will be very careful the next time I fall in love, she told herself. Also, she had made a promise to herself that she intended on keeping. She was never going to go out with another writer: no matter how charming, sensitive, inventive or fun they could be. They weren’t worth it in the long run. They were emotionally too expensive and the upkeep was complicated. They were like having a vacuum cleaner around the house that broke all the time and only Einstein could fix it. She wanted her next lover to be a broom.―from  Sombrero Fallout by Richard Brautigan.',
                'Usually we walk around constantly believing ourselves. “I’m okay” we say. “I’m alright”. But sometimes the truth arrives on you and you can’t get it off. That’s when you realize that sometimes it isn’t even an answer–it’s a question. Even now, I wonder how much of my life is convinced.― from The Book Thiefby Markus Zusak.',
                'I love you without knowing how, or when, or from where. I love you simply without problems or pride. I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close. - from 100 Love Sonnets by Pablo Neruda.',
            ],
                
            
            SKILL_NAME: 'GoodPara from good books',
            GET_FACT_MESSAGE: "Here's the best excerpt from book ",
            HELP_MESSAGE: 'You can say tell me a good paragraph, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
};


//entry point for registering the handlers
exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

//all needed handlers
const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GoodParasFromGoodBook': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    
};
