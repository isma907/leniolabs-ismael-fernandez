export interface ICongressListApiResponse {
  status: string,
  copyright: string,
  results: [
    {
      congress: string,
      chamber: string,
      num_results: number,
      offset: number,
      members: ICongressMember[]
    }
  ];
}


export interface ICongressMember {
  id: string,
  title: string,
  short_title: string,
  api_uri: string,
  first_name: string,
  middle_name?: string | null,
  last_name: string,
  suffix?: string | null,
  date_of_birth: string,
  gender?: string | null,
  party: string,
  leadership_role?: string | null,
  twitter_account?: string | null,
  facebook_account?: string | null,
  youtube_account?: string | null,
  govtrack_id: string,
  cspan_id?: string | null,
  votesmart_id?: string | null,
  icpsr_id?: string | null,
  crp_id?: string | null,
  google_entity_id?: string | null,
  fec_candidate_id: string,
  url: string,
  rss_url?: string | null,
  contact_form?: string | null,
  in_office: boolean,
  cook_pvi?: string | null,
  dw_nominate?: string | null,
  ideal_point?: string | null,
  seniority: string,
  total_votes: number,
  missed_votes: number,
  total_present: number,
  last_updated: string,
  ocd_id: string,
  office?: string | null,
  phone?: string | null,
  fax?: string | null,
  state: string,
  senate_class: string,
  state_rank: string,
  lis_id: string,
  missed_votes_pct: number,
  votes_with_party_pct: number,
  votes_against_party_pct: number
}


export interface ICongressDetailApiResponse {
  status: string,
  copyright: string,
  results: ICongressMemberDetail[]
}

export interface ICongressMemberDetail {
  crp_id?: string
  cspan_id?: string
  current_party: string
  date_of_birth: string
  facebook_account?: string
  first_name: string
  gender: string
  google_entity_id?: string
  govtrack_id: string
  icpsr_id: string
  id: string
  in_office: false
  last_name: string
  last_updated: string
  member_id: string
  middle_name: string
  most_recent_vote: string
  roles: ICongressMemberRoles[],
  rss_url?: string
  suffix?: string
  times_tag: string
  times_topics_url: string
  twitter_account?: string
  url?: string
  votesmart_id?: string
  youtube_account?: string
}

export interface ICongressMemberRoles {
  bills_cosponsored: number
  bills_sponsored: number
  chamber: string
  committees: []
  congress: string
  contact_form?: string,
  cook_pvi?: string,
  dw_nominate?: string,
  end_date: string
  fax?: string,
  fec_candidate_id: string,
  ideal_point?: string,
  leadership_role?: string,
  lis_id: string
  missed_votes: number
  missed_votes_pct: number
  next_election: string
  ocd_id: string
  office?: string,
  party: string
  phone?: string,
  senate_class: string
  seniority: string
  short_title: string
  start_date: string
  state: string
  state_rank: string
  subcommittees: []
  title: string
  total_present: number
  total_votes: number
  votes_against_party_pct: number
  votes_with_party_pct: number
}
