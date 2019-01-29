import React, { Component } from 'react'

export class VoiceSelect extends Component {
  render() {
    return (
      <select value={this.props.voice} onChange={this.props.handleChange} className="voice-select col s5 m7">
      <option value="Ivy">Ivy [English - American]</option>
      <option value="Joanna">Joanna [English - American]</option>
      <option value="Joey">Joey [English - American]</option>
      <option value="Justin">Justin [English - American]</option>
      <option value="Kendra">Kendra [English - American]</option> 
      <option value="Kimberly">Kimberly [English - American]</option>
      <option value="Salli">Salli [English - American]</option>
      <option value="Nicole">Nicole [English - Australian]</option>
      <option value="Russell">Russell [English - Australian]</option>
      <option value="Emma">Emma [English - British]</option>
      <option value="Brian">Brian [English - British]</option>
      <option value="Amy">Amy [English - British]</option>
      <option value="Raveena">Raveena [English - Indian]</option>        
      <option value="Geraint">Geraint [English - Welsh]</option>
      <option value="Ricardo">Ricardo [Brazilian Portuguese]</option>
      <option value="Vitoria">Vitoria [Brazilian Portuguese]</option>
      <option value="Lotte">Lotte [Dutch]</option>
      <option value="Ruben">Ruben [Dutch]</option>
      <option value="Mathieu">Mathieu [French]</option>
      <option value="Celine">Celine [French]</option>
      <option value="Chantal">Chantal [Canadian French]</option>
      <option value="Marlene">Marlene [German]</option>
      <option value="Dora">Dora [Icelandic]</option>
      <option value="Karl">Karl [Icelandic]</option>
      <option value="Carla">Carla [Italian]</option>
      <option value="Giorgio">Giorgio [Italian]</option>
      <option value="Mizuki">Mizuki [Japanese]</option>
      <option value="Liv">Liv [Norwegian]</option>
      <option value="Maja">Maja [Polish]</option>
      <option value="Jan">Jan [Polish]</option>
      <option value="Ewa">Ewa [Polish]</option>
      <option value="Cristiano">Cristiano [Portuquese]</option>
      <option value="Ines">Ines [Portuquese]</option>
      <option value="Carmen">Carmen [Romanian]</option>
      <option value="Maxim">Maxim [Russian]</option>
      <option value="Tatyana">Tatyana [Russian]</option>
      <option value="Enrique">Enrique [Spanish]</option>
      <option value="Penelope">Penelope [US Spanish]</option>
      <option value="Enrique">Miguel [US Spanish]</option>
      <option value="Conchita">Conchita [Castilian Spanish]</option>
      <option value="Astrid">Astrid [Swedish]</option>
      <option value="Filiz">Filiz [Turkish]</option>
      <option value="Gwyneth">Gwyneth [Welsh]</option>
    </select>
    )
  }
}

export default VoiceSelect
