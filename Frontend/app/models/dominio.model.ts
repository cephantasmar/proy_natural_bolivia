export interface IDominio {
  result: Result;
}

export interface Result {
  address:         null;
  city:            null;
  country:         null;
  creation_date:   Date;
  dnssec:          string;
  domain_name:     string;
  emails:          string;
  expiration_date: Date;
  name:            null;
  name_servers:    string[];
  org:             null;
  referral_url:    null;
  registrar:       string;
  state:           null;
  status:          string[];
  updated_date:    Date;
  whois_server:    string;
  zipcode:         null;
}
