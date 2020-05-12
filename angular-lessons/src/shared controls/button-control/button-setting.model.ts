export class ButtonSetting {
    id?: string;
    caption?: string;
    disabled?: boolean;
    hidden?: boolean;
    click?: string;
    imgUrl?: string;

    constructor(_buttonSetting: ButtonSetting) {
        this.id = _buttonSetting.id;
        this.caption = _buttonSetting.caption;
        this.disabled = _buttonSetting.disabled;
        this.hidden = _buttonSetting.hidden;
        this.click = _buttonSetting.click;
        this.imgUrl = _buttonSetting.imgUrl;
    }
}