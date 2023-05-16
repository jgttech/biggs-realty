const src = [
  'data:image/png;base64,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',
  'oh5ZQPR0OD6zIpIZyBPYMs5heqKridW1RFxO3cIlZuOMm/VhwuKx2SKz1Vh00IKce8HGIgtlsgk0eGV+nQy',
  'zGZBNsPZDIrKZWdP1x54NIhGbApIXDv76J413Nh1OBWjB0Sio9XrYrtFzJzmLf8ECuTT5GTc1fq9FQdNiek',
  'HHMaU2jXsh6TR0bQNdKXDdvPM2/5IU6dv2mubJQ9P1WDzQopR5gELrXsCfBx49zlHIqKSm0mPVWH1dey/l8',
  'UvUJ+QQnpZ7PNRdc2LAP+AkKgbLnDBtNTddhWj1cD0IRIhiZEMjQhkqEJkQxNiGRoQiRDEyIZmhDJ0IRIhi',
  'ZEMjQhkqEJkQxNiGRoQiRDEyIZmhDJ0IRIhiZEMjQhkqEJkQxNiGT8BwKA81IRB6GvAAAAJXRFWHRkYXRlO',
  'mNyZWF0ZQAyMDIzLTA1LTE2VDE5OjE5OjUyKzAwOjAwJyfkdgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMy0w',
  'NS0xNlQxOToxOTo1MiswMDowMFZ6XMoAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjMtMDUtMTZUMTk6MjA',
  '6MDMrMDA6MDCKDzUOAAAAF3RFWHRwZGY6QXV0aG9yAEZlbW1lIEZhdGFsZeDiIO8AAAAVdEVYdHhtcDpDcm',
  'VhdG9yVG9vbABDYW52YerHErEAAAAASUVORK5CYII=',
];

type LogoProps = Html.Image;

export const Logo: FC<LogoProps> = props => <img {...props} src={src.join('')} alt='Click' />;