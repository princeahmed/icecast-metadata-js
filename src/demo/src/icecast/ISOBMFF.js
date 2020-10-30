export default class ISOBMFF {
  static trun = Uint8Array.from([0x74, 0x72, 0x75, 0x6e]);
  static traf = Uint8Array.from([0x74, 0x72, 0x61, 0x66]);
  static moof = Uint8Array.from([0x6d, 0x6f, 0x6f, 0x66]);
  static mfhd = Uint8Array.from([0x6d, 0x66, 0x68, 0x64]);
  static moov = Uint8Array.from([
    0x00,
    0x00,
    0x00,
    0x20,
    0x66,
    0x74,
    0x79,
    0x70,
    0x69,
    0x73,
    0x6f,
    0x6d,
    0x00,
    0x00,
    0x02,
    0x00,
    0x69,
    0x73,
    0x6f,
    0x6d,
    0x69,
    0x73,
    0x6f,
    0x32,
    0x69,
    0x73,
    0x6f,
    0x36,
    0x6d,
    0x70,
    0x34,
    0x31,
    0x00,
    0x00,
    0x02,
    0x9f,
    0x6d,
    0x6f,
    0x6f,
    0x76,
    0x00,
    0x00,
    0x00,
    0x6c,
    0x6d,
    0x76,
    0x68,
    0x64,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x03,
    0xe8,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x40,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x02,
    0x00,
    0x00,
    0x01,
    0xa1,
    0x74,
    0x72,
    0x61,
    0x6b,
    0x00,
    0x00,
    0x00,
    0x5c,
    0x74,
    0x6b,
    0x68,
    0x64,
    0x00,
    0x00,
    0x00,
    0x03,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x01,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x40,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x3d,
    0x6d,
    0x64,
    0x69,
    0x61,
    0x00,
    0x00,
    0x00,
    0x20,
    0x6d,
    0x64,
    0x68,
    0x64,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0xac,
    0x44,
    0x00,
    0x00,
    0x00,
    0x00,
    0x55,
    0xc4,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x2d,
    0x68,
    0x64,
    0x6c,
    0x72,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x73,
    0x6f,
    0x75,
    0x6e,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x53,
    0x6f,
    0x75,
    0x6e,
    0x64,
    0x48,
    0x61,
    0x6e,
    0x64,
    0x6c,
    0x65,
    0x72,
    0x00,
    0x00,
    0x00,
    0x00,
    0xe8,
    0x6d,
    0x69,
    0x6e,
    0x66,
    0x00,
    0x00,
    0x00,
    0x10,
    0x73,
    0x6d,
    0x68,
    0x64,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x24,
    0x64,
    0x69,
    0x6e,
    0x66,
    0x00,
    0x00,
    0x00,
    0x1c,
    0x64,
    0x72,
    0x65,
    0x66,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x0c,
    0x75,
    0x72,
    0x6c,
    0x20,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0xac,
    0x73,
    0x74,
    0x62,
    0x6c,
    0x00,
    0x00,
    0x00,
    0x60,
    0x73,
    0x74,
    0x73,
    0x64,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x50,
    0x6d,
    0x70,
    0x34,
    0x61,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x02,
    0x00,
    0x10,
    0x00,
    0x00,
    0x00,
    0x00,
    0xac,
    0x44,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x2c,
    0x65,
    0x73,
    0x64,
    0x73,
    0x00,
    0x00,
    0x00,
    0x00,
    0x03,
    0x80,
    0x80,
    0x80,
    0x1b,
    0x00,
    0x01,
    0x00,
    0x04,
    0x80,
    0x80,
    0x80,
    0x0d,
    0x6b,
    0x15,
    0x00,
    0x00,
    0x00,
    0x00,
    0x02,
    0xee,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x06,
    0x80,
    0x80,
    0x80,
    0x01,
    0x02,
    0x00,
    0x00,
    0x00,
    0x10,
    0x73,
    0x74,
    0x74,
    0x73,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x10,
    0x73,
    0x74,
    0x73,
    0x63,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x14,
    0x73,
    0x74,
    0x73,
    0x7a,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x10,
    0x73,
    0x74,
    0x63,
    0x6f,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x28,
    0x6d,
    0x76,
    0x65,
    0x78,
    0x00,
    0x00,
    0x00,
    0x20,
    0x74,
    0x72,
    0x65,
    0x78,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x62,
    0x75,
    0x64,
    0x74,
    0x61,
    0x00,
    0x00,
    0x00,
    0x5a,
    0x6d,
    0x65,
    0x74,
    0x61,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x21,
    0x68,
    0x64,
    0x6c,
    0x72,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x6d,
    0x64,
    0x69,
    0x72,
    0x61,
    0x70,
    0x70,
    0x6c,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x00,
    0x2d,
    0x69,
    0x6c,
    0x73,
    0x74,
    0x00,
    0x00,
    0x00,
    0x25,
    0xa9,
    0x74,
    0x6f,
    0x6f,
    0x00,
    0x00,
    0x00,
    0x1d,
    0x64,
    0x61,
    0x74,
    0x61,
    0x00,
    0x00,
    0x00,
    0x01,
    0x00,
    0x00,
    0x00,
    0x00,
    0x4c,
    0x61,
    0x76,
    0x66,
    0x35,
    0x38,
    0x2e,
    0x32,
    0x39,
    0x2e,
    0x31,
    0x30,
    0x30,
  ]);

  constructor() {
    /* prettier-ignore */

    /*
        const moof = new boxParser.Box("moof");
        const traf = moof.add("traf");
        traf.add("tftd")
        const trun = moof.add("trun");
        trun.set("flags", 0x01);
*/

    /*
        ftyp file-type
          major_brand / compatible_brand -> must be something user agent supports
        moov
          must contain boxes / fields required by major_brand / compatible_brand
          entry_count in stts, stsc, and stco are set to 0
          mvex (movie extends) -> required
        styp (segment type)
          optional
        moof
          must conform to requirements for major_brand / compatible_brand
          traf (track fragment box) -> required
            tftd (track fragment decode time box) -> required
            base-data-offset-present - (must be set to false)
          trun (track fragment run) -> required
            data-offset-present (must be set to true)
        mdat
        */
  }

  static getUint32(number) {
    const lengthBytes = new Uint8Array(4);
    new DataView(lengthBytes.buffer).setUint32(0, number, false);
    return lengthBytes;
  }

  static getMoof(frames) {
    /* prettier-ignore */
    const mfhd = Uint8Array.from([0x00,0x00,0x00,0x10,...ISOBMFF.mfhd,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x01]);
    /* prettier-ignore */
    const traf = Uint8Array.from([...ISOBMFF.traf,0x00,0x00,0x00,0x24,0x74,0x66,0x68,0x64,0x00,0x00,0x00,0x39,0x00,0x00,0x00,0x01,0x00,0x00,0x00,0x00,0x00,0x00,0x02,0xBF,0x00,0x00,0x04,0x80,0x00,0x00,0x02,0x72,0x02,0x00,0x00,0x00,0x00,0x00,0x00,0x14,0x74,0x66,0x64,0x74,0x01,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00]);
    /*
     * moof length
     * moof
     * -- trun length
     * -- trun
     * -- # samples
     * -- data offset
     * -- samples
     */

    const samples = frames.reduce(
      (acc, { _section }) => [
        ...acc,
        ...ISOBMFF.getUint32(_section.byteLength),
      ],
      []
    );

    const trunLength = 20 + frames.length * 4;
    const trafLength = 4 + traf.length + trunLength;
    const moofLength = 8 + mfhd.length + trafLength;
    const dataOffset = ISOBMFF.getUint32(moofLength + 8);

    const trun = Uint8Array.from([
      ...ISOBMFF.trun, // 4 bytes
      ...[0x00, 0x00, 0x02, 0x01], // flags 4 bytes
      ...ISOBMFF.getUint32(frames.length), // 4 bytes
      ...dataOffset, // 4 bytes
      ...samples,
    ]);

    return Uint8Array.from([
      ...ISOBMFF.getUint32(moofLength),
      ...ISOBMFF.moof,
      ...mfhd,
      ...ISOBMFF.getUint32(trafLength),
      ...traf,
      ...ISOBMFF.getUint32(trunLength),
      ...trun,
    ]);
  }

  static getMdat(data) {
    const mdatLength = ISOBMFF.getUint32(8 + data.length);
    const mdat = Uint8Array.from([0x6d, 0x64, 0x61, 0x74]);

    return Uint8Array.from([...mdatLength, ...mdat, ...data]);
  }
}
