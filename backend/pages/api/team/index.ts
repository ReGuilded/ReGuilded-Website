import type { NextApiRequest, NextApiResponse } from 'next'
import { core, contributors, social, translators} from "@/constants/team";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.headers.authorization !== process.env.AUTH_TOKEN) return res.status(401).json({
        code: 401,
        message: "Unauthorized Request",
    })

    const coreDevelopersObject = [];
    const contributorsObject = [];
    const socialMediaManagersObject = [];
    const translatorsObject = [];

    for (const developer of core) {
        const { guildedId, name, titles, socials } = developer;

        const response = await axios.get(
            `https://www.guilded.gg/api/users/${guildedId}/profilev3`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GUILDED_API}`,
                },
            }
        );
        const { data } = response;

        coreDevelopersObject.push({
            guildedId,
            name,
            titles,
            github: socials.github,
            twitter: socials.twitter ? socials.twitter : null,
            bio: data.aboutInfo ? data.aboutInfo.tagLine : null,
            profilePicture: data.profilePicture,
        });
    }

    for (const contributor of contributors) {
        const { guildedId, name, titles, socials } = contributor;

        const response = await axios.get(
            `https://www.guilded.gg/api/users/${guildedId}/profilev3`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GUILDED_API}`,
                },
            }
        );
        const { data } = response;

        contributorsObject.push({
            guildedId,
            name,
            titles,
            github: socials?.github,
            twitter: socials?.twitter ? socials?.twitter : null,
            bio: data.aboutInfo ? data.aboutInfo.tagLine : null,
            profilePicture: data.profilePicture,
        });
    }

    for (const socialMediaManager of social) {
        const { guildedId, name, titles, socials } = socialMediaManager;

        const response = await axios.get(
            `https://www.guilded.gg/api/users/${guildedId}/profilev3`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GUILDED_API}`,
                },
            }
        );
        const { data } = response;

        socialMediaManagersObject.push({
            guildedId,
            name,
            titles,
            github: socials?.github,
            twitter: socials?.twitter ? socials?.twitter : null,
            bio: data.aboutInfo ? data.aboutInfo.tagLine : null,
            profilePicture: data.profilePicture,
        });
    }

    for (const translator of translators) {
        const { guildedId, name, titles, socials } = translator;

        const response = await axios.get(
            `https://www.guilded.gg/api/users/${guildedId}/profilev3`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.GUILDED_API}`,
                },
            }
        );
        const { data } = response;

        translatorsObject.push({
            guildedId,
            name,
            titles,
            github: socials?.github,
            twitter: socials?.twitter ? socials?.twitter : null,
            bio: data.aboutInfo ? data.aboutInfo.tagLine : null,
            profilePicture: data.profilePicture,
        });
    }

    res.status(200).json({
        coreDevelopers: coreDevelopersObject,
        contributors: contributorsObject,
        socialMediaManagers: socialMediaManagersObject,
        translators: translatorsObject,
    });
}