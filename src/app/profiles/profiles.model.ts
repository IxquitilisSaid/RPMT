import { Persona } from './personas/persona.model';

export class Profile {
  constructor(
    public groupId: string,
    public profileId: string,
    public personaAtt: Persona[],
    public groupMarkUrl: string,
    public profileMarkUrl: string
  ) {}
}
