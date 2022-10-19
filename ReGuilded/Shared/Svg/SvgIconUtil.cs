namespace ReGuilded.Shared.Svgs;

public static class SvgIconUtil
{
    public static SvgIconType GetIcon(string text) =>
        (SvgIconType)Enum.Parse(typeof(SvgIconType), text);
}