export interface ICongressListApiResponse {
  status: string,
  copyright: string,
  results: [
    {
      congress: string,
      chamber: string,
      num_results: number,
      offset: number,
      members: []
    }
  ];
}


export interface ICongressMember {
  id: string,
  title: string,
  short_title: string,
  api_uri: string,
  first_name: string,
  middle_name?: null,
  last_name: string,
  suffix?: null,
  date_of_birth: string,
  gender?: null,
  party: string,
  leadership_role?: null,
  twitter_account?: null,
  facebook_account?: null,
  youtube_account?: null,
  govtrack_id: string,
  cspan_id?: null,
  votesmart_id?: null,
  icpsr_id: string,
  crp_id?: null,
  google_entity_id?: null,
  fec_candidate_id: string,
  url: string,
  rss_url?: null,
  contact_form?: null,
  in_office: boolean,
  cook_pvi?: null,
  dw_nominate?: null,
  ideal_point?: null,
  seniority: string,
  total_votes: number,
  missed_votes: number,
  total_present: number,
  last_updated: string,
  ocd_id: string,
  office?: null,
  phone?: null,
  fax?: null,
  state: string,
  senate_class: string,
  state_rank: string,
  lis_id: string,
  missed_votes_pct: number,
  votes_with_party_pct: number,
  votes_against_party_pct: number
}
