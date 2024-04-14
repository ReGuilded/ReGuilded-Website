import type { NextApiRequest, NextApiResponse } from 'next'
import { core, contributors, social, translators} from "@/constants/team";
import axios from "axios";
import Cors from "cors";

const cors = Cors({
    methods: ["GET"],
    origin: "*"
})

function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) return reject(result)

            return resolve(result);
        })
    })
}

async function getGuildedUser(guildedId: string) {
    const userResponse = await axios.get(`https://www.guilded.gg/api/users/${guildedId}/profilev3`);
    
    return userResponse.data;
}

async function getUserIcon(guildedId: string) {
    return new Promise(async (resolve) => {
        await axios.get(
          `https://www.guilded.gg/api/v1/servers/ARmQz4mR/members/${guildedId}`,
          {
              headers: {
                  Authorization: `Bearer ${process.env.GUILDED_AUTH_TOKEN}`,
              }
          }
        ).then((response) => {
            if (response.status === 200) {
                resolve(response.data.member.user.avatar)
            } else {
                resolve("https://www.reguilded.dev/LogoTransparent.svg")
            }
        }).catch(() => { resolve("https://www.reguilded.dev/LogoTransparent.svg") })
    })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await runMiddleware(req, res, cors);
    // if (req.headers.authorization !== process.env.AUTH_TOKEN) return res.status(401).json({
    //     code: 401,
    //     message: "Unauthorized Request",
    // })

    const coreDevelopersObject = [];
    const contributorsObject = [];
    const socialMediaManagersObject = [];
    const translatorsObject = [];

    for (const developer of core) {
        const { guildedId, name, titles, socials } = developer;

        const userData = await getGuildedUser(guildedId);
        const userIcon = await getUserIcon(guildedId);

        coreDevelopersObject.push({
            guildedId,
            name,
            titles,
            github: socials.github,
            twitter: socials.twitter ? socials.twitter : null,
            bio: userData.aboutInfo ? userData.aboutInfo.tagLine : null,
            profilePicture: userIcon,
        });
    }

    for (const contributor of contributors) {
        const { guildedId, name, titles, socials } = contributor;

        const userData = await getGuildedUser(guildedId);
        const userIcon = await getUserIcon(guildedId);

        contributorsObject.push({
            guildedId,
            name,
            titles,
            github: socials?.github,
            twitter: socials?.twitter ? socials?.twitter : null,
            bio: userData.aboutInfo ? userData.aboutInfo.tagLine : null,
            profilePicture: userIcon,
        });
    }

    for (const socialMediaManager of social) {
        const { guildedId, name, titles, socials } = socialMediaManager;

        const userData = await getGuildedUser(guildedId);
        const userIcon = await getUserIcon(guildedId);

        socialMediaManagersObject.push({
            guildedId,
            name,
            titles,
            github: socials?.github,
            twitter: socials?.twitter ? socials?.twitter : null,
            bio: userData.aboutInfo ? userData.aboutInfo.tagLine : null,
            profilePicture: userIcon,
        });
    }

    for (const translator of translators) {
        const {guildedId, name, titles, socials} = translator;

        const userData = await getGuildedUser(guildedId);
        const userIcon = await getUserIcon(guildedId);

        translatorsObject.push({
            guildedId,
            name,
            titles,
            github: socials?.github,
            twitter: socials?.twitter ? socials?.twitter : null,
            bio: userData.aboutInfo ? userData.aboutInfo.tagLine : null,
            profilePicture: userIcon,
        });
    }

    res.status(200).json({
        coreDevelopers: coreDevelopersObject,
        contributors: contributorsObject,
        socialMediaManagers: socialMediaManagersObject,
        translators: translatorsObject,
    });
}