// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'
import {  Experience } from '../../typings'

const query = groq `
    *[_type == "experience" ] [0]
`;

type Data = {
  experience: Experience
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const experience: Experience = await sanityClient.fetch(query);

    res.status(200).json({experience})
  }